import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [timeSet, setTimeSet] = useState(false);
  const [fixedTime, setFixedTime] = useState("");

  function setTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // add leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
    const newFixedTime = `${hours}:${minutes}`;
    setFixedTime(newFixedTime);
    setTimeSet(true);
  }

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{timeSet ? fixedTime : "Click 'Set Time' to set the time."}</span>
        
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;