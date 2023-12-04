
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
    
           {/*<Profilecontent /> */}
           <Dialogs /> 
         
            
        </div>
     
  );
}

export default App;
