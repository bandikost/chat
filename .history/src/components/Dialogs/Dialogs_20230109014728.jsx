import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogsItem = (props) => {
    let path = 'dialogs/' + props.id;

    return <div className="dialog-item">
    <NavLink to='path'> {props.name} </NavLink>
</div>
}




const Dialogs = (props) => {
    return (       
    <div className={s.content}>
        <div className={s.contentcontainer}>
            <div className="dialogs">
                <div className="dialog-item">
                    <NavLink to='/dialogs/1'>BoBka</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/2'>BoBuk</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/3'>Danek</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/4'>B/\ADuK</NavLink>
                </div>
                <div className="dialog-item">
                    <NavLink to='/dialogs/5'>$ta$</NavLink>
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