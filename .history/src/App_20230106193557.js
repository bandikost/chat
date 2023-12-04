
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';

import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (

    <div className="App">
      <Header />
      <Dialogs />
      <div className='container'>
        <Dialogs />
        <div className='App-wrapper'>      
        <Navbar />
          
            <Profilecontent /> 
          
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
