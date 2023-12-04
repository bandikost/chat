import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = () => {
	ReactDOM.render (
        <BrowserRouter>
            <App  addPost={addPost} />
        </BrowserRouter>, document.getElementById('root'));
    
};
