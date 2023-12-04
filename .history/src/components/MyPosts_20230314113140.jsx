import React from "react";
import Post from "./Any files/Post";
import s from './MyPosts.module.css';
import {format} from "date-fns"


const MyPosts = (props) => {
    const timeDate = format(new Date(), "h : mm")
    let postsElements = 
    props.posts.map( p => <Post message={p.message} />)


    let newPostElement = React.createRef(); 
    
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

return (
    
<div className="container-text">    
    <textarea ref={newPostElement}/>

    <button onClick={ addPost }>Add post</button>

    <button>Remove</button>
        <div className="container-post">
            <div className={s.posts}>
                {timeDate}
                {postsElements}
                {timeDate}
            </div>
        </div>
</div>

    )
}

export default MyPosts;