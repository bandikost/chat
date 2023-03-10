import { doc, onSnapshot, setDoc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import message from "./Message"

const Chats = ({ chatId, closeChat }) => {
  const { currentUser } = useContext(AuthContext);
  const [userId, setUserId] = useState(currentUser.uid);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatInfo, setChatInfo] = useState(null);

  useEffect(() => {
    setUserId(currentUser.uid);
  }, [currentUser.uid]);

  useEffect(() => {
    const chatRef = db
      .collection("userChats")
      .doc(userId)
      .collection("chats")
      .doc(chatId);

    const unsub = chatRef.onSnapshot((doc) => {
      if (doc.exists()) {
        setChatInfo(doc.data().userInfo);
      }
    });

    return () => {
      unsub();
    };
  }, [chatId, userId]);

  useEffect(() => {
    const messagesRef = db
      .collection("userChats")
      .doc(userId)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("createdAt");

    const unsub = messagesRef.onSnapshot((snapshot) => {
      const messagesData = snapshot.docs.map((doc) => doc.data());
      setMessages(messagesData);
    });

    return () => {
      unsub();
    };
  }, [chatId, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = {
      text: newMessage.trim(),
      createdAt: new Date(),
      senderId: currentUser.uid,
    };

    db.collection("userChats")
      .doc(userId)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

    setNewMessage("");
  };

  const handleDeleteChat = () => {
    db.collection("userChats").doc(userId).collection("chats").doc(chatId).delete();
    closeChat();
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <img src={chatInfo?.photoURL} alt="" />
        <span>{chatInfo?.displayName}</span>
        <button onClick={handleDeleteChat}>Delete Chat</button>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.createdAt.toMillis()}
            className={`chat-message ${
              message.senderId === currentUser.uid ? "sent" : "received"
            }`}
          >
            <span className="chat-message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chats;
