import React, { useContext, useEffect, useState } from 'react'


import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";
import { NavLink } from 'react-router-dom';

// Для очистки сообщений в чате с пользоватлем
import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";


//Изображения

import camera from "../images/chatIcons/cam.png";
import add from "../images/chatIcons/add.png";
import more from "../images/chatIcons/more.png";
import deleteChat from "../images/chatIcons/delete.png";
import search from "../images/chatIcons/search.png";
import volume from "../images/chatIcons/volume.png";
import Wvolume from "../images/chatIcons/Wvolume.png";




export const Chat = () => {
  const { data } = useContext(ChatContext);
 
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);

  const [showImage, setShowImage] = useState(false);

  // function to toggle the state when the image is clicked
  const handleImageClick = () => {
    setShowImage(!showImage);
  };

  const [showMessages, setShowMessages] = useState(true);

  const handleClearMessages = async () => {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: [],
      });
    } catch (error) {
      console.error("Error deleting messages: ", error);
    }

    setShowMessages(false);
  };

  return (
 
   
    <div className="chat" >
      <div className="chatInfo">
      
      <span className={showImage ? 'show' : ''} onClick={handleImageClick}><img className={showImage ? 'show-img' : ''} onClick={handleImageClick} src={data.user?.photoURL} alt="" width={"50px"} style={{borderRadius: "50%"}}  />
      <span>{data.user?.displayName}</span></span>
        <div className="chatIcons">

          <button className='ChatMore' onClick={() => setIsOpen(!isOpen)}><img src={more} alt=""  /></button>
          {isOpen && (
            <div className='more'> 
                <a className='' href="#" onClick={() => setIsOpens(!isOpens)}>
                  <img src={volume} alt=""  /><span>Уведомления</span></a>                  
                    {isOpens && (
                        <> 
                 
                          <div className='more-2'>
                            <li> <img src={Wvolume} alt=""  /> Навсегда</li>
                            <li> <img src={Wvolume} alt=""  /> На 10 минут</li>
                            <li> <img src={Wvolume} alt=""  /> На 1 час</li>
                            <li> <img src={Wvolume} alt=""  /> На день</li> </div>
                        </>
                    )}
                

              <hr style={{height: "7px", backgroundColor: "#ddddf7", color: "#ddddf7", border: "none"}}/>
              <li><img src={search} alt=""  width={"24px"} height={"34px"} /><span>Поиск</span></li>
              <li><img src={camera} alt="" /><span>Видеозвонок</span></li>
              <li><img src={add} alt="" /><span>Создать беседу</span></li>
              <li onClick={handleClearMessages}><img src={deleteChat} alt=""  /><span>Удалить чат</span></li>
            </div>
          )}
          
        </div>    
      </div>  
      
<Messages onClick={() => setIsOpen(false)}  className={`messages ${isOpen ? 'fixed' : ''}`} />
      
      
      <Input /> 
     
     
    </div>
    
  
  )
}

export default Chat;