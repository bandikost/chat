import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, subscribe } from './redux/state';
import state from './redux/state'


export let rerenderEntireTree = (state) => {
  const ReactDOM = root.createRoot(document.getElementById('root'));
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>
  );
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree);


