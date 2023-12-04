let rerenderEntireTree = () => {
  console.log('1')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'first message'},
            {id: 2, message: 'second message'},
            {id: 3, message: 'third message'},
      ]
    },
    dialogsPage: { 
        dialogs: [
            {id: 1, name: 'Vladimir'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Stasik'},
            {id: 4, name: 'Roman'},
            {id: 5, name: 'Stepan'},
            {id: 6, name: 'Bot'}
          ],  

        messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are u'},
        {id: 4, message: 'Stop talking'},
        {id: 5, message: 'God damn'},
        {id: 6, message: 'Siu'}
      ] 
    },
    slidebar: {}
}

export const addPost = (postMessage) => {
  
    let newPost = {
        id: 5,
        message: postMessage
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {

}


export default state;


  
  
  

  