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
    return <div className="message-item">{props.message}</div>
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
                <Message message="1" id="1" />
                <Message message="2" id="2" />
                <Message message="3" id="3" />
            </div>
        </div>
        </div> 
    )
}

export default Dialogs;