import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  let fixedTime = null;

  function setTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // add leading zero if necessary
    const minutes = now.getMinutes().toString().padStart(2, "0"); // add leading zero if necessary
    fixedTime = `${hours}:${minutes}`;
    document.getElementById("time").innerHTML = fixedTime;
  }

  window.onload = function () {
    document.getElementById("time").innerHTML = "Click 'Set Time' to set the time.";
  };

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
        <span onClick={setTime}></span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;