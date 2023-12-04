import React from "react";
import classes from './Navbar.module.css';

let classes = {
    'nav' : 'Navbar12323',
}

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <li>
                <a> 1 </a>
            </li>
            <li>
                <a> 2 </a>
            </li>
            <li>
                <a> 3 </a>
            </li>
            <li>
                <a> 4 </a>
            </li>
            <li>
                <a> 5 </a>
            </li>
            
        </div>
    );
}

export default Navbar;