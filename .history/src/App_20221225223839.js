
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Navbar from './components/Profilecontent';

function App() {
  return (

    <div className="App">
      <div className='App-wrapper'>
      <Header />
      <Navbar />
      <Profilecontent />
      </div>
    </div>
    
  );
}

export default App;
