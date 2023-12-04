import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import search from "../images/chatIcons/search.png";


const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
  
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setErr({ message: "User not found" });
        setUser(null);
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
        setErr(null);
      }
    } catch (err) {
      console.log(err);
      setErr({ message: "Error searching for user" });
      setUser(null);
    }
  };
  

  const handleKey = (e) => {
    if (e.code === "Enter" && username ) {
      handleSearch();
      if (!username) {
        setErr("Введите имя пользователя");
      } else {
        handleSearch(username);
      }
    } 
  };
  
  

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      } else {
        // check if user is already in the chat
        if (res.data().userInfo[user.uid]) {
          // remove user from chat
          await updateDoc(doc(db, "chats", combinedId), {
            [`userInfo.${user.uid}`]: null,
          });
        } else {
          // add user to chat
          await updateDoc(doc(db, "chats", combinedId), {
            [`userInfo.${user.uid}`]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
            },
          });
        }
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
      <img src={search} alt="" />
      <input
  type="text"
  placeholder="Поиск пользователя..."
  onKeyDown={handleKey}
  onChange={(e) => {
    if (e.target.value === "" ) {
      setUsername(null);
      setErr(null); 
    } else {
      setUsername(e.target.value);
    }
  }}
  value={username}
/>

      </div>

    {user && (
      <div className="userChat">
        <img src={user.photoURL} alt="" />
        <span>{user.displayName}</span>
        <button onClick={handleSelect}>Начать чат</button>
        <button onClick={() => setUser(null)}>Отменить</button>
      </div>
    )}
       {err && <span className="search-err"><p><img src={search} alt=""/>Не могу никого найти</p></span>}
  </div>
);

};

export default Search;