import { doc, onSnapshot, setDoc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import message from "./Message"

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const db = getFirestore();

  const [fixedTime, setFixedTime] = useState(null);

  const setTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setFixedTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    setTime();
  }, []);

  const chatRef = db.collection("userChats").doc(userId + "/" + chatId);


  const handleRemove = async (chatId) => {
    // Remove the chat from the database
    await deleteDoc(doc(db, "userChats", currentUser.uid, chatId));
    
    // Remove the chat from the local state
    const newChats = { ...chats };
    delete newChats[chatId];
    setChats(newChats);
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() || {}); // Use an empty object as default value to avoid errors
      });
  
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = async (u) => {
    await setDoc(doc(db, "userChats", currentUser.uid, u.uid), {
      userInfo: u,
      date: new Date().getTime(),
    });
    dispatch({ type: "CHANGE_USER", payload: u });
  };


  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <p>{fixedTime}</p>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
          <button onClick={() => handleRemove(chat[0])}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Chats;
