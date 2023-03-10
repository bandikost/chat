import React from 'react'

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Сообщение...' />
      <div className="send">
        <img src="" alt='' />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor='file'>
          <img src='' alt='' />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input;
