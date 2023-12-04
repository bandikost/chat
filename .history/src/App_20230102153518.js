
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';


function App() {
  return (

    <div className="App">
      <Header />
      <div className='App-wrapper'>      
      <Navbar />
      <Profilecontent />
      
      </div>
    </div>
    
  );
}

export default App;
