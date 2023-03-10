import { collection, doc, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const { currentChat, dispatch } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const [fixedTime, setFixedTime] = useState(null);

  const setTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setFixedTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    setTime();
  }, []);

  useEffect(() => {
    if (currentChat) {
      const q = query(
        collection(db, "chats", currentChat.chatId, "messages"),
        orderBy("createdAt", "asc"),
        limit(50)
      );
      const unsub = onSnapshot(q, (snapshot) => {
        const messages = [];
        snapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messages);
      });
      return () => {
        unsub();
      };
    }
  }, [currentChat]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.message.value.trim();
    if (text !== "") {
      const newMessage = {
        text,
        senderId: currentUser.uid,
        senderName: currentUser.displayName,
        senderPhotoURL: currentUser.photoURL,
        createdAt: new Date(),
      };
      db.collection("chats")
        .doc(currentChat.chatId)
        .collection("messages")
        .add(newMessage)
        .then(() => {
          dispatch({ type: "UPDATE_LAST_MESSAGE", payload: newMessage });
        })
        .catch((err) => {
          console.error(err);
        });
      e.target.reset();
    }
  };

  return (
    <div className="chat">
      <div className="chatHeader">
        {currentChat && (
          <>
            <img src={currentChat.user.photoURL} alt="" />
            <span>{currentChat.user.displayName}</span>
          </>
        )}
      </div>
      <div className="chatMessages">
        {messages.map((message, i) => (
          <Message
            key={message.id}
            message={message}
            fixedTime={i === messages.length - 1 ? fixedTime : null}
          />
        ))}
      </div>
      <form className="chatInput" onSubmit={handleSubmit}>
        <input type="text" name="message" autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chats;