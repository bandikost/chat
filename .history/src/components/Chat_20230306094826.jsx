import React from 'react'
import camera from "../images/chatIcons/cam.png"

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
      </div>
    </div>
  )
}

export default Chat;