import React from 'react'
import img from "../images/img.png"
import attach from "../images/attach.png"

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Сообщение...' />
      <div className="send">
        <img src={attach} alt='' />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor='file'>
          <img style={{marginTop: "10px"}} src={img} alt='' />
        </label>
        <button style={{borderRadius: "5px"}}>Отправить</button>
      </div>
    </div>
  )
}

export default Input;
