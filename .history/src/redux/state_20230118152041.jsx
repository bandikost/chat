let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'first message', }
        ]
    }
}



export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage
    };

    state.profilePage.posts.push(newPost);
}