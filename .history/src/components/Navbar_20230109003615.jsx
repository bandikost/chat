import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const setActive = ({isActive}) => isActive ? 'item.active' : '';


const Navbar = () => {
    return (
       
        <nav className={s.nav}>
            <div className={s.active}>
                <NavLink to="/profile" className={setActive}> Profile </NavLink>
            </div>
            <div className={s.active}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? 'item.active' : ''}> Message </NavLink>
            </div>
            <div className={s.active}>
                <a> News </a>
            </div>
            <div className={s.active}>
                <a> Settings </a>
            </div>
            <div className={s.active}>
                <a> Music    </a>
            </div>
         
        </nav>
      
    );
}

export default Navbar;