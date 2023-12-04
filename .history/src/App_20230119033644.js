import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';



const App = (props) => {


return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <Routes>
            <Route path="/profile" element={ <Profilecontent posts={props.state.profilePage.posts} />} />
              
            <Route path="/dialogs" element={<Dialogs 
            dialogs={props.state.messagesPage.dialogs} 
            messages={props.state.messagesPage.messages} />} />        
          </Routes>                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
