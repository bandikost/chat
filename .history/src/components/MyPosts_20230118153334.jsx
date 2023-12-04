import React from "react";
import Post from "./Any files/Post";



const MyPosts = (props) => {

    let newPostElement = React.createRef(); 

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

return (
    
<div className="container-text">    
    <textarea ref={newPostElement}></textarea>

    <button onClick={ addPost }>Add post</button>

    <button>Remove</button>
        <div className="container-post">
            <div className='post'>
      
                <Post message='Hello' /> 
                <Post message='Second message' />
                <Post message='Third message' />
                
            </div>
        </div>
</div>

    )
}

export default MyPosts;