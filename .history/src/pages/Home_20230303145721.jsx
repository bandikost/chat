import React from 'react'
import Chat from '../components/Chat';

export const Home = () => {
  return (
    
    <div className="home">
        <div className="container">
            <Slidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home;