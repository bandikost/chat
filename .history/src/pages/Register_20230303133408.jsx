import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
         <div className='formWrapper'>
            <span className="logo">'пока думаю'</span>
            <span className="title">Регистрация </span>
            <form>
                <input type="text" placeholder='dispaly name' />
                <input type="email" placeholder=' email'/>
                <input type="password" placeholder=' password'/>
                <input type="file" />
                <button>Войти</button>
            </form>
         </div>
    </div>
  )
}
