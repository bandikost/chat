import React from "react";

const Post = (props) => {
    
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
  
 
}

export default Post;