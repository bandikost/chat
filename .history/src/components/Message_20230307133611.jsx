import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { fromUnixTime } from 'date-fns';
import { format } from 'date-fns';



const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


  const fixedTime = useMemo(() => {
    const messageTime = fromUnixTime(message.timestamp.seconds);
    const hours = messageTime.getHours().toString().padStart(2, "0");
    const minutes = messageTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }, [message.timestamp.seconds]);

  useEffect(() => {
    setTime();
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