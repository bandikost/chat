import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
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
               .DialogItem
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