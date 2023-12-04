import React from "react";
import Post from "./Any files/Post";

const MyPosts = () => {
    return (
<div className="container-text">
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove</button>
        <div className='CONTAINER-POST'>
            <Post message='Hello' />
            <Post message='Second message' />
        </div>
</div>
    )
}

export default MyPosts;