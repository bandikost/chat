import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <div className='App-wrapper-content'>
            <Routes path="/profile" element={<Profilecontent/>}/>
            <Routes path="/dialogs" element={<Dialogs/>}/>        
          </div>                    
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
