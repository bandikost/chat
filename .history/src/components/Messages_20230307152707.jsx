import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  const [fixedTime, setFixedTime] = useState(null);

  const setTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setFixedTime(`${hours}:${minutes}`);
  };


  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  useEffect(() => {
    setTime();
  }, []);

  return (
    <div className="messages">
      {messages.map((m) => (
        <>
        <Message message={m} key={m.id} />
        <p className="messageTime">{fixedTime}</p>
        </>
      ))}
    </div>
  );
};

export default Messages;