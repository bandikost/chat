import React, { useContext, useEffect, useState } from 'react'
import 'status-indicator/styles.css'
import moment from 'moment'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// Компоненты

import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

// Для очистки сообщений в чате с пользователем
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";


//Изображения

import camera from "../images/chatIcons/cam.png";
import add from "../images/chatIcons/add.png";
import more from "../images/chatIcons/more.png";
import moreButton from "../images/chatIcons/more-button.png";
import deleteChat from "../images/chatIcons/delete.png";
import search from "../images/chatIcons/search.png";
import volume from "../images/chatIcons/volume.png";
import Wvolume from "../images/chatIcons/Wvolume.png";


const checkOnlineStatus = async () => {
  try {
    const online = await fetch("/");
    return online.status >= 200 && online.status < 300;
  } catch (err) {
    return false;
  }
};


export const Chat = () => {
  const { data } = useContext(ChatContext)
  // Дроп-меню

  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenClear, setisOpenClear] = useState(false);

  // Открывает изображение покрупнее

  const [showImage, setShowImage] = useState(false);

  // Функция для переключения состояния при нажатии на изображение

  const handleImageClick = () => {
    setShowImage(!showImage);
  };


  // Очищает сообщения в чате с пользователем

  const [setShowMessages] = useState(true);

  const handleClearMessages = async () => {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: [],
      });
      setIsOpen(false)
      setisOpenClear(false)
    } catch (error) {
      console.error("Не получается очистить сообщения: ", error);
    
    }

    setShowMessages(false);
  };

  const [status, setStatus] = useState(<status-indicator />);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await checkOnlineStatus();
      setStatus(result ? <status-indicator positive pulse /> : <status-indicator />);
    }, 30);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function handleLoad() {
      setStatus((await checkOnlineStatus()) ? <status-indicator positive pulse /> : <status-indicator />);
    }
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);


  return (
 
   
    <div className="chat" >
      <div className="chatInfo">
     
      <span className={showImage ? 'show' : ''} onClick={handleImageClick}>
    <img className={showImage ? 'show-img' : ''} onClick={handleImageClick} src={data.user?.photoURL} alt="" width={"50px"} style={{borderRadius: showImage > 0 ? "0%" : '50%' }}  />

    <span>
      {data.user?.displayName}
      <div className='status'>{status}</div>
    </span>

    <div className="show-info" style={{ display: showImage > 0 ? "flex" : "none" }}>
      <p className='show-info-title'>Информация о пользователе: {data.user?.displayName}</p>
      <span><p>Номер телефона: </p>{data.email?.displayEmail}</span>
      <span><p>О себе: </p>{data.user?.displayBio}</span>
      <span><p>Никнейм: </p>{data.user?.displayUserName}</span>
    </div>
  </span>


        <div className="chatIcons">

          <button className='ChatMore' onClick={() => setIsOpen(!isOpen)}><img src={more} alt=""  /></button>
          {isOpen && (
            <div className='more'> 
                <a className='' href="#" onClick={() => setIsOpens(!isOpens)} style={{display: "flex"}}>
                  <img src={volume} alt=""  /><span>Уведомления</span><img src={moreButton} width={"18px"} alt="" style={{marginTop: "-5px", marginLeft: "10px"}} /></a>                  
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
              <a href='#' className='' onClick={() => setisOpenClear(!isOpenClear) }><img src={deleteChat} alt=""  /><span>Удалить чат</span></a>
              {isOpenClear && (
                <div className='moreClear'>
                  <span>Вы уверены?</span>
                  <hr />
                    <div className="delete" >
                      <a onClick={handleClearMessages}>Да</a>
                   <hr />
                      <a onClick={() => setisOpenClear(false) || setIsOpen(false)}>Нет</a>
                    </div>
                </div>
              )}
            </div>
          )}
          
        </div>    
      </div>    
      <Messages onClick={() => setIsOpen(false)} className={`messages ${isOpen ? 'fixed' : ''}`} />
      <Input />     
    </div>
  )
}

export default Chat;