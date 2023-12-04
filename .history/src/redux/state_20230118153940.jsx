let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'first message'},
            {id: 2, message: 'second message'},
            {id: 3, message: 'third message'}
        ]
    }

    slidebar: {}
}



export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage
    };

    state.profilePage.posts.push(newPost);
}