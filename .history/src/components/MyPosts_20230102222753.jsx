import React from "react";
import Post from "./Any files/Post";

const MyPosts = () => {
    return (
<div className="container-text">
    
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
                <div className={s.posts}>
                    <Post message='Hello' />
                </div>
            
      
        </div>
    )
}

export default MyPosts;