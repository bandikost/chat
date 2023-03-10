import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { fromUnixTime } from 'date-fns';
import { format } from 'date-fns';
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [fixedTime, setFixedTime] = useState(null);
  const seconds = myDate?.getSeconds();
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);



  useEffect(() => {
    const messageTime = fromUnixTime(message.timestamp.seconds);
    const currentTime = new Date();
    const timeDiff = Math.floor((currentTime - messageTime) / (60 * 1000)); // calculate time difference in minutes
    const hours = messageTime.getHours().toString().padStart(2, "0");
    const minutes = messageTime.getMinutes().toString().padStart(2, "0");
    setFixedTime(`${hours}:${minutes}`);
  }, []);

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
        <p className="messageText">{message.text}</p>
        <p className="messageTime">{fixedTime}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
