import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [fixedTime, setFixedTime] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  useEffect(() => {
    const now = new Date();
    const messageTime = new Date(message.timestamp);
    const timeDiff = Math.round((now - messageTime) / 1000); // time difference in seconds
    const minutesDiff = Math.floor(timeDiff / 60); // time difference in minutes

    if (minutesDiff < 1) {
      setFixedTime("Just now");
    } else if (minutesDiff < 60) {
      setFixedTime(`${minutesDiff}m ago`);
    } else if (minutesDiff < 1440) {
      setFixedTime(`${Math.floor(minutesDiff / 60)}h ago`);
    } else {
      const day = messageTime.getDate().toString().padStart(2, "0");
      const month = (messageTime.getMonth() + 1).toString().padStart(2, "0");
      const year = messageTime.getFullYear().toString().padStart(2, "0");
      setFixedTime(`${day}-${month}-${year}`);
    }
  }, [message.timestamp]);

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
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        <p className="messageTime">{fixedTime}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;