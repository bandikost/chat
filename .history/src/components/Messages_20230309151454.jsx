import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = ({ onClick }) => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);


  useEffect(() => {
    const messages = document.querySelector('messages');
    if (isOpen) {
      messages.classList.add('fixed');
    } else {
      messages.classList.remove('fixed');
    }
  }, [isOpen]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages" onClick={onClick}>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
