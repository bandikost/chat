import React, { useContext, useEffect, useState } from 'react'
import camera from "../images/chatIcons/cam.png"
import add from "../images/chatIcons/add.png"
import more from "../images/chatIcons/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";


export const Chat = () => {
  const { data } = useContext(ChatContext);
 
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="chat">
      <div className="chatInfo">
      
      <span><img src={data.user?.photoURL} alt="" width={"50px"} style={{borderRadius: "50%"}} />
      <span>{data.user?.displayName}</span></span>
        <div className="chatIcons">
          <button><img src={camera} alt="" /></button>
          <button><img src={add} alt="" /></button>

          <button className='ChatMore' onClick={() => setIsOpen(!isOpen)}><img src={more} alt=""  />
          {isOpen && (
            <div className='more'>
              <li>Настройки звука</li>
              <li>Поиск</li>
              <li>3</li>
            </div>
            )}
          </button>

        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;