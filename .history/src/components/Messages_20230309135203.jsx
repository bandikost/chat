import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    const { data } = useContext(ChatContext);

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)


  return (
    <div className="messages" onClick={onClose}>
      {messages.map((m) => (
      {data.messages.map((message) => (
        <Message message={m} key={m.id}  />
        ))}
    
      ))}
    </div>
  );
};

export default Messages;