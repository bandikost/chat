import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {Route, BrowserRouter} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
  return (  
    <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />  
            <Route component={Dialogs} />
            <Route component={Profilecontent} />
          <Profilecontent />     
           <Dialogs />                 
        </div>
      </div> 
      </BrowserRouter>   
  );
}

export default App;