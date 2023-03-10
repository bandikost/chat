import React, { useState } from "react";
import avatar from "../images/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {

  const[err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(

  (error) => {
    setErr(err)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      });
    });
  }
);

    await setDoc(doc(db, "users", res.user.uid), {
      displayName,
      email,
      password
    })

    }
    catch (err){
      setErr(true)
    }
 
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
                {err & <span>Something went wrong</span>}
            </form>
            <p>У вас уже есть аккаунт? login</p>
         </div>
    </div>
  )
}

export default Register;