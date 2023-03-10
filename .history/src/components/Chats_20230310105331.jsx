import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [hiddenUsers, setHiddenUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [fixedTime, setFixedTime] = useState(null);

  const setTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setFixedTime(`${hours}:${minutes}`);
  };

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

  const handleHideUser = async (userId) => {
    const userRef = doc(db, "users", userId);

    await updateDoc(userRef, {
      hiddenBy: arrayRemove(currentUser.uid),
    });

    setHiddenUsers([...hiddenUsers, userId]);
  };

  useEffect(() => {
    setTime();
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
      const data = doc.data();

      setHiddenUsers(data?.hiddenBy ?? []);
    });

    return unsub;
  }, [currentUser]);

  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          if (hiddenUsers.includes(chat[1].userInfo.uid)) return null;

          return (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <p>{fixedTime}</p>
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
              </div>
              <button onClick={() => handleHideUser(chat[1].userInfo.uid)}>
                Hide
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
