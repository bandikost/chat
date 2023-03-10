import React, { useContext, useEffect, useState } from 'react'
import camera from "../images/chatIcons/cam.png"
import add from "../images/chatIcons/add.png"
import more from "../images/chatIcons/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";
import { firestore } from "../firebase";


export const Chat = () => {
  const { data } = useContext(ChatContext);

  const updateOnlineStatus = (uid, status) => {
    const userRef = firestore.collection("users").doc(uid);
  
    userRef.update({
      onlineStatus: status,
      lastSeen: new Date(),
    });
  };
  
  // Call this function when the user signs in
  const handleUserSignIn = (uid) => {
    updateOnlineStatus(uid, "online");
  
    // Listen for when the user disconnects
    firestore
      .collection("users")
      .doc(uid)
      .onDisconnect()
      .update({
        onlineStatus: "offline",
        lastSeen: new Date(),
      });
  };
  
  // Call this function when the user signs out
  const handleUserSignOut = (uid) => {
    updateOnlineStatus(uid, "offline");
  };

  const [onlineStatus, setOnlineStatus] = useState("offline");

  useEffect(() => {
    const unsubscribe = firestore
      .collection("users")
      .doc(data.user.uid)
      .onSnapshot((snapshot) => {
        const user = snapshot.data();
        if (user) {
          setOnlineStatus(user.onlineStatus);
        }
      });

    return () => unsubscribe();
  }, [data.user.uid]);



  return (
    <div className="chat">
      <div className="chatInfo">
      {onlineStatus === "online" ? "Online" : "Offline"}
      <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={camera} alt="" /> 
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;