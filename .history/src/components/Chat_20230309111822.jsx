import React, { useContext, useEffect, useState } from 'react'
import camera from "../images/chatIcons/cam.png"
import add from "../images/chatIcons/add.png"
import more from "../images/chatIcons/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from '../context/AuthContext';

export const Chat = () => {
  const { data } = useContext(ChatContext);
  const {currentUser} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="chat">
      <div className="chatInfo">
      
      <span><img src={data.user?.photoURL} alt="" width={"50px"} /></span>
      <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <button><img src={camera} alt="" /></button>
          <button><img src={add} alt="" /></button>
          <button className='ChatMore' onClick={() => setIsOpen(!isOpen)}><img src={more} alt=""  />
          {isOpen && (
            <div className='more'></div>)}</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;