import React, { useContext, useEffect, useState } from 'react'
import camera from "../images/chatIcons/cam.png";
import add from "../images/chatIcons/add.png";
import more from "../images/chatIcons/more.png";
import deleteChat from "../images/chatIcons/delete.png";
import search from "../images/chatIcons/search.png";
import volume from "../images/chatIcons/volume.png";

import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";


export const Chat = () => {
  const { data } = useContext(ChatContext);
 
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  return (
 
   
    <div className="chat">
      <div className="chatInfo">
      
      <span><img src={data.user?.photoURL} alt="" width={"50px"} style={{borderRadius: "50%"}} />
      <span>{data.user?.displayName}</span></span>
        <div className="chatIcons">

          <button className='ChatMore' onClick={() => setIsOpen(!isOpen)}><img src={more} alt=""  />
          {isOpen && (
            <div className='more'> 
                <li onClick={() => setIsOpens(!isOpens)}> 
                  <img src={volume} alt=""  /><span>Уведомления</span>
                  {isOpens && (
                      <>
                        <div className='more-2'> </div>
                      </>
                    )}
                </li>  

              <hr style={{height: "7px", backgroundColor: "#ddddf7", color: "#ddddf7", border: "none"}}/>
              <li><img src={search} alt=""  width={"24px"} height={"34px"} /><span>Поиск</span></li>
              <li><img src={camera} alt="" /><span>Видеозвонок</span></li>
              <li><img src={deleteChat} alt=""  /><span>Удалить чат</span></li>
              <li><img src={add} alt="" /><span>Создать чат</span></li>
            </div>
          )}
          </button>
        </div>    
      </div>  
      
      <Messages onClick={() => setIsOpen(false)} /> 
      
      
      <Input onClick={() => setIsOpen(false)} /> 
     
     
    </div>
    
  
  )
}

export default Chat;