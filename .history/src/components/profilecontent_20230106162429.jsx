import React from "react";
import Post from "./Any files/Post";
import MyPosts from "./MyPosts";
const Profilecontent = () => {
    return (
      <div className="container">
        <div className="name">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Desert_Electric.jpg" width={'1000px'}></img>
        </div>
          
          <MyPosts />
          
      </div>
     
    );
    
}



export default Profilecontent;