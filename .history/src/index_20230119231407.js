import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, subscribe } from './redux/state';
import state, {subscribe} from './redux/state'

export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>
  );
}

subscribe();
rerenderEntireTree(state);


