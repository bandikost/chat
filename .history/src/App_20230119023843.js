import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';

let Somecomponent = () => <Dialogs />


const App = (props) => {
return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <Routes>     
            <Route path="/profile" render={ Somecomponent} />  
            <Route path="/dialogs" render={ () => <Dialogs />} />  
          </Routes>                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
