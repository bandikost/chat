import React from "react";
import Post from "./Any files/Post";

const MyPosts = () => {
    return (
<div className="container-text">
    <textarea></textarea>
    <button>Add post</button>
    <button>Remove</button>
        <div className="container-post">
            <div className='post'>
                <Post message='Hello ssss' />
                <Post message='Second message' />
            </div>
        </div>
</div>
    )
}

export default MyPosts;