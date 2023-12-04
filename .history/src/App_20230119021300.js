import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import * as ReactDOM from 'react-dom/client';




const App = (props) => {
return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <Routes>
            <Route path="/profile" 
              element={ <Profilecontent addPost={props.addPost} />} />
              
            <Route path="/dialogs" 
            element={<Dialogs/>}/>        
          </Routes>                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
