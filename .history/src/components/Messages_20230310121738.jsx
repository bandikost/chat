import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = ({ onClick }) => {
  const [messages, setMessages] = useState([]);
  const { data, currentUser } = useContext(ChatContext);

  const [showMessages, setShowMessages] = useState(true);

  const handleClearMessages = async () => {
    try {
      // Remove the current user ID from the members array
      await updateDoc(doc(db, "chats", data.chatId), {
        members: arrayRemove(data.currentUser.uid),
      });
    } catch (error) {
      console.error("Error removing user from chat: ", error);
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

  if (messages.value <= 0 ) {

  }

  return (
  <div className="messages" onClick={onClick}>
    <div className="message-container" style={{ marginTop: "50px", display: messages.length > 0 ? "none" : "flex" }}>

      <p>Пока что нет сообщений с этим пользователем
    
      Отправте сообщение, чтобы начать общение (:</p>
      
    </div>
    {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
  </div>
);

};

export default Messages;