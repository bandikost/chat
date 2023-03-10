import { doc, updateDoc, arrayRemove } from "firebase/firestore";
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

  return (
    <div className="messages" onClick={onClick}>
      {showMessages &&
        messages.map((message) => <Message message={message} key={message.id} />)}
    </div>
  );
};

export default Messages;