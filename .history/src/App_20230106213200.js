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
          
            <Routes path='/dialogs' component={Dialogs} />
            <Routes path='/profile' component={Profilecontent} />
                                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
