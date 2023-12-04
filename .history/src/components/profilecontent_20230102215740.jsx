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
                {props.message}
              </div>
            <div className="post">
            <img src=""></img>
              post 2
              </div>
            <div className="post">
            <img src=""></img>
              post 3
              </div>
              <Post message='Hello' />
              <Post message='Second message' />
            </div>
      </div>
     
    );
    
}



export default Profilecontent;