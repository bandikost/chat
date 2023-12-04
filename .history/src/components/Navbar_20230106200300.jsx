import React from "react";
import s from './Navbar.module.css';


let s = {
    ' nav ' : ' nav123 ',
    ' ' : ' '
}

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className="">
                <a> Profile </a>
            </div>
            <li>
                <a> Message </a>
            </li>
            <li>
                <a> Music </a>
            </li>
            <li>
                <a> News </a>
            </li>
            <li>
                <a> Settings </a>
            </li>

            
        </nav>
    );
}

export default Navbar;