
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';

import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (   
        <div className='App-wrapper'>    
          <Header />      
          <Navbar />  
          <Profilecontent /> 
          <div className='content'>
          <Dialogs />
          </div>
                
        </div>
     
  );
}

export default App;
