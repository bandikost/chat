import React from "react";
import s from './Navbar.module.css';


let s = {
    ' ' : ' ',
    ' ' : ' '
}

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="">
                <a> Profile </a>
            </li>
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

            
        </div>
    );
}

export default Navbar;