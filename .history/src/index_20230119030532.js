import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';


let posts = [
  {id: 1, message: 'firstssds message'},
  {id: 2, message: 'second message'},
  {id: 3, message: 'third message'},
]

ReactDOM.render(<App />, document.getElementById('root'));


reportWebVitals();
