

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage
    };

    state.profilePage.posts.push(newPost);
}