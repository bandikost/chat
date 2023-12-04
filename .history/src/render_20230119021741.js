import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import * as ReactDOM from 'react-dom/client';


export let rerenderEntireTree = () => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} />
		</React.StrictMode>);

};
