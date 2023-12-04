import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';



const App = (props) => {

  let posts = [
    {id: 1, message: 'firsts message'},
    {id: 2, message: 'second message'},
    {id: 3, message: 'third message'},
]

return (  
  <BrowserRouter >
    <div className='container'>
      <Header />  
        <div className='App-wrapper'>                 
          <Navbar />
          <Routes>
            <Route path="/profile" 
              element={ <Profilecontent posts={posts} addPost={props.addPost} />} />
              
            <Route path="/dialogs" 
            element={<Dialogs/>}/>        
          </Routes>                  
        </div>
      </div> 
  </BrowserRouter>   
  );
}

export default App;
