import React from 'react'
import camera from "../images/chatIcons/cam.png"
import add from "../images/chatIcons/add.png"
import more from "../images/chatIcons/more.png"
import Messages from './Messages'

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Name</span>
        <div className="chatIcons">
          <img src={camera} alt="" /> 
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
        <Messages />
      </div>
    </div>
  )
}

export default Chat;