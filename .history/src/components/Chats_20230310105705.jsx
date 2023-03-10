import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import message from "./Message"

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [fixedTime, setFixedTime] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const setTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setFixedTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data()?.chats);
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleRemoveUser = async (userId) => {
    try {
      const chatRef = doc(db, "userChats", currentUser.uid);
      await updateDoc(chatRef, {
        chats: arrayRemove({
          userId,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTime();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChats = chats.filter((chat) =>
    chat.userInfo.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chats">
      <div className="search">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      {filteredChats
        ?.sort((a, b) => b.date - a.date)
        .map((chat) => (
          <div className="userChat" key={chat.userId}>
            <div className="userChatInfo" onClick={() => handleSelect(chat.userInfo)}>
              <img src={chat.userInfo.photoURL} alt="" />
              <div>
                <span>{chat.userInfo.displayName}</span>
                <p>{chat.lastMessage?.text}</p>
              </div>
            </div>
            <div className="remove">
              <button onClick={() => handleRemoveUser(chat.userId)}>Remove</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;

