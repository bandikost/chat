import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (       
    <div className={s.content}>
        <div className={s.contentcontainer}>
            <div className="dialogs">
                <div className="dialog-item">
                    <NavLink to='/dialogs/1'>BoBka</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/2'>BoBka</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/3'>BoBka</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/4'>BoBka</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/5'>BoBka</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className="message-item">1</div>
                <div className="message-item">1</div>
                <div className="message-item">1</div>
            </div>
        </div>
        </div> 
    )
}

export default Dialogs;