import React from 'react';
import * as ReactDOMclient from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, subscribe } from './redux/state';
import state from './redux/state'


export let rerenderEntireTree = (state) => {
  const root = ReactDOMclient.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>
  );
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree);


