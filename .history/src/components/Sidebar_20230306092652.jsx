import React from 'react'
import { Navbar } from './Navbar';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  )
}

export default Sidebar;