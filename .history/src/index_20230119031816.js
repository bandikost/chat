import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';


let posts = [
  {id: 1, message: 'first message'},
  {id: 2, message: 'second message'},
  {id: 3, message: 'third message'},
]

let dialogs = [
  {id: 1, name: 'Vladimir'},
  {id: 2, name: 'Vlad'},
  {id: 3, name: 'Stasik'},
  {id: 4, name: 'Roman'},
  {id: 5, name: 'Stepan'},
  {id: 6, name: 'Bot'}
]   

let messages = [
  {id: 1, message: '1Hello'},
  {id: 2, message: 'Hi'},
  {id: 3, message: 'How are u'},
  {id: 4, message: 'Stop talking'},
  {id: 5, message: 'God damn'},
  {id: 6, message: 'Siu'}
] 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} addPost={addPost}/>
  </React.StrictMode>
);


reportWebVitals();
