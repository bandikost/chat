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
      const chatDocRef = doc(db, "chats", data.chatId);
  
      // delete the chat document from the chats collection
      await deleteDoc(chatDocRef);
  
      // delete the chat document from the userChats collection for both users
      const currentUserChatRef = doc(db, "userChats", currentUser.uid, "chats", data.chatId);
      const otherUserChatRef = doc(db, "userChats", data.otherUser.uid, "chats", data.chatId);
  
      await Promise.all([
        deleteDoc(currentUserChatRef),
        deleteDoc(otherUserChatRef),
      ]);
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