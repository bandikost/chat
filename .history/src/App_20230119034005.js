import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import state from './redux/state';


const App = (props) => {
debugger;

return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <Routes>
            <Route path="/profile" element={ <Profilecontent 
            state={props.state.profilePage} />} />
              
            <Route path="/dialogs" element={<Dialogs 
            state={props.state.dialogsPage} />} />        
          </Routes>                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
