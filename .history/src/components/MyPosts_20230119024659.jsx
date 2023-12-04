import React from "react";
import Post from "./Any files/Post";



const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'first message'},
        {id: 2, message: 'second message'},
        {id: 3, message: 'third message'},
    ]

    let postsElements = 
    posts.map( p => <Post message={p.message} />)


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