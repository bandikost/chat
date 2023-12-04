import React from "react";


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
      </div>
          <Post message='Hello' />
          <Post message='Second message' />