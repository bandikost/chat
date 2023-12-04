export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage
    };

    state.profilePage.posts.push(newPost);
}