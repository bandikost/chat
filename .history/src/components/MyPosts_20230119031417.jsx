import React from "react";
import Post from "./Any files/Post";
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElements = 
    props.posts.map( p => <Post message={p.message} />)


   

return (
    
<div className="container-text">    
    <textarea ></textarea>

    <button >Add post</button>

    <button>Remove</button>
        <div className="container-post">
            <div className={s.posts}>
      
                {postsElements}

            </div>
        </div>
</div>

    )
}

export default MyPosts;