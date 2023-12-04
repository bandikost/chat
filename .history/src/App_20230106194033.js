
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
        <div className='App-wrapper'>          
        <Navbar />  
        <div className='content'>
           {/*<Profilecontent /> */}
           <Dialogs /> 
        </div>      
            
        </div>
      </div>  
  );
}

export default App;
