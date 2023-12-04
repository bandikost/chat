import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRoute, Route} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
return (  
  <BrowserRoute >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />  
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profilecontent} />                       
        </div>
      </div> 
  </BrowserRoute>   
  );
}

export default App;
