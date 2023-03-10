import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const [isOpen, setIsOpen] = useState(true); // assuming that isOpen is a state variable that you want to update

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="messages" onClick={onClose}>
      {messages.map((message) => (
        <Message
          message={message}
          key={message.id}
          onClick={handleToggleOpen} // pass the callback function down to the Message component
        />
      ))}
    </div>
  );
};

export default Messages;
