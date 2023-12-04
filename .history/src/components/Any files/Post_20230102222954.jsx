import React from "react";

const Post = (props) => {
    return (
      <div className={s.item}>
      <img src=""></img>
      {props.message}
    <div>
      <span>like</span>
    </div>
  </div>
    )
}

export default Post;