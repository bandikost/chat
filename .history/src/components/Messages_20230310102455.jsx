import { doc, onSnapshot, updateDoc, arrayRemove, deleteDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = ({ onClick }) => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  const [showMessages, setShowMessages] = useState(true);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  const handleDeleteMessage = async (messageId) => {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayRemove(doc(db, "messages", messageId)),
      });

      // Delete the user if there are no more messages
      if (messages.length === 1) {
        await deleteDoc(doc(db, "users", data.user.id));
      }
    } catch (error) {
      console.error("Failed to delete message: ", error);
    }
  };

  return (
    <div className="messages" onClick={onClick}>
      {showMessages &&
        messages.map((message) => (
          <Message
            message={message}
            key={message.id}
            onDelete={() => handleDeleteMessage(message.id)}
          />
          <button onClick={handleDeleteMessage}></button>
        ))}
    </div>
  );
};

export default Messages;