import React from 'react';
import avatar from "../images/addAvatar.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export const Register = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <div className='formContainer'>
         <div className='formWrapper'>
            <span className="logo">'пока думаю'</span>
            <span className="title">Регистрация </span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Имя' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Пароль'/>
                <input style={{display: "none"}} type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={avatar} alt="" />
                    <span>Выберите аватар</span>
                </label>
                <button>Зарегистрироваться</button>
            </form>
            <p>У вас уже есть аккаунт? login</p>
         </div>
    </div>
  )
}

export default Register;