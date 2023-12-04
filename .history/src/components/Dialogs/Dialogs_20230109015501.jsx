import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem = (props) => {
    let path = 'dialogs/' + props.id;

    return <div className="dialog-item">
    <NavLink to={path}> {props.name} </NavLink>
</div>
}

const Message = (props) => {
    return <div className={message-item} > {props.Message}></div>
}




const Dialogs = (props) => {
    return (       
    <div className={s.content}>
        <div className={s.contentcontainer}>
            <div className="dialogs">
               <DialogItem name="Vovik" id="1" />
               <DialogItem name="Vladik" id="2" />
               <DialogItem name="Stsyan" id="3" />
               <DialogItem name="Vlados" id="4" />
               <DialogItem name="Artur" id="5" />
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