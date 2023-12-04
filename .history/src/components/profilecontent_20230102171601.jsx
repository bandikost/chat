import React from "react";
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
              <span {props.name}></span>
            </div>
      </div>
     
    );
    
}



export default Profilecontent;