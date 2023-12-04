import React from "react";
import Post from "./Any files/Post"

const Profilecontent = () => {
    return (
      <div className="container">
        <div className="name">wait image</div>
          <div className="container-text">
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
          <div className="container-post">
            <div className="post">
              <img src=""></img>
              post 1
              </div>
            <div className="post">
            <img src=""></img>
              post 2
              </div>
            <div className="post">
            <img src=""></img>
              post 3
              </div>             
    </div>
          <Post message='Hello' />
          <Post message='Second message' />
      </div>
     
    );
    
}



export default Profilecontent;