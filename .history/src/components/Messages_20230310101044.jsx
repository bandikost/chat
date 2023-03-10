import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = ({ onClick }) => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  const [showMessages, setShowMessages] = useState(true);

  const handleClearMessages = async () => {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: [],
      });
    } catch (error) {
      console.error("Error deleting messages: ", error);
    }

    setShowMessages(false);
  };

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
      
      {showMessages && messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;