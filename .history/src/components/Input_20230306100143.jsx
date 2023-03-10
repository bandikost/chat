import React from 'react'
import img from "../images/img.png"

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Сообщение...' />
      <div className="send">
        <img src="" alt='' />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor='file'>
          <img src={img} alt='' />
        </label>
        <button>отправить</button>
      </div>
    </div>
  )
}

export default Input;
