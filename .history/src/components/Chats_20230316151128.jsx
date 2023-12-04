import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import messages from "./Messages"
import firebase from 'firebase/app';
import 'firebase/firestore';



const checkOnlineStatus = async () => {
  try {
    const online = await fetch("/");
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    return false;
  }
};

const Chats = () => {

  


  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [status, setStatus] = useState(<status-indicator />);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await checkOnlineStatus();
      setStatus(result ? <status-indicator positive/> : <status-indicator  />);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function handleLoad() {
      setStatus((await checkOnlineStatus()) ? <status-indicator positive /> : <status-indicator  />);
    }
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };


  return (
    <div className="chats" style={{display: messages.length > 0 ? "block" : "none"}}>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
            
           
              <span className="statusChats">{chat[1].userInfo.displayName}
              <div className='status' id="status">{status}</div> </span>
            
            <div className="userChat-container">
            <p>
              {chat[1].lastMessage?.userId === currentUser.uid ? "" : "Вы: "}
              {chat[1].lastMessage?.text}
            </p>
            <p> </p>
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Chats;
