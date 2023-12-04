import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import Home from "./pages/Home.jsx";




const App = (props) => {
return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <Routes>
          <Route path="/" exact component={<Profilecontent />}/>
          <Route path="/dialogs" 
            render={ () => <Dialogs  />}/> 

            <Route path="/profile" 
              render={ () => <Profilecontent state={props.state.profilePage}  addPost={props.addPost} />} />

          </Routes>                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
