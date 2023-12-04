import React from "react";

const Post = (props) => {
    return (
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
    )
}

export default Post;