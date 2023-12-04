import React from "react";

const Post = (props) => {
    return (
      <div className={s.item}>
    <div className="post">
      <img src=""></img>
      {props.message}
    </div>
    <div className="post">
    <img src=""></img>
    {props.message}
      </div>
    <div className="post">
    <img src=""></img>
    {props.message}
      </div>   
           
</div>
    )
}

export default Post;