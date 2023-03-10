import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = ({ onClick }) => {
  // Initialize state variables
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const [showMessages, setShowMessages] = useState(true);

  // Handler function to clear all messages in the chat
  const handleClearMessages = async () => {
    try {
      // Update the Firestore document with an empty messages array
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: [],
      });
    } catch (error) {
      console.error("Error deleting messages: ", error);
    }

    // Hide messages after they are cleared
    setShowMessages(false);
  };

  // Use Firebase's onSnapshot to listen for changes in the messages collection
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages" onClick={onClick}>
      {/* Show the clear messages button only when messages are displayed */}
      {showMessages && (
        <button onClick={handleClearMessages}>Clear Messages</button>
      )}
      {/* Map over messages and display them using the Message component */}
      {showMessages &&
        messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
    </div>
  );
};

export default Messages;