import React from "react";
import s from './Navbar.module.css';
import MyPosts from "./MyPosts";


const Profilecontent = () => {
    return (
      <div className={s.contnet}>
        <div className="name">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg" ></img>
        </div>
        епнршощлдзфыув
        <MyPosts />          
      </div>
     
    );
    
}



export default Profilecontent;