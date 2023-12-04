import React from "react";
import Post from "./Any files/Post";



const MyPosts = () => {

    let newPostElement = React.createRef(); 

    let addPost = () => {
        let text = newPostElement.current.value;
    }
    


    return (
    
<div className="container-text">    
    <textarea id='new-post'></textarea>

    <button ref={newPostElement}>Add post</button>

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