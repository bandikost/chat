import React from "react";

const Post = (props) => {
    return (
      <div className='container-post'>
      <img src="https://img.freepik.com/free-photo/happy-smiling-businessman-in-eyeglasses-holding-folder_171337-18854.jpg?w=2000"></img>
      
      {props.message}
    <div>   
    </div>
  </div>
    )
}

export default Post;