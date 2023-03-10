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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);


  return (
    <div className="chat">
      <div className="chatInfo">
      <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <button><img src={camera} alt="" /></button>
          <button><img src={add} alt="" /></button>
          <button className='ChatMore' onClick={() => setIsOpen(!isOpen)}><img src={more} alt=""  />
          {isOpen && (
            `style`)}</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;