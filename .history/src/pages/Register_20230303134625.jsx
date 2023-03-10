import React from 'react';


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
                <input style={{display: "none"}} type="file" id="file"/>
                <label htmlFor='file'></label>
                <button>Зарегистрироваться</button>
            </form>
            <p>Видимо у вас еще нет аккаунт, пора бы это исправить</p>
         </div>
    </div>
  )
}
