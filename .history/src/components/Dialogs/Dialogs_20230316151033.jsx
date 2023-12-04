import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import messages from "./Messages"
import firebase from 'firebase/app';
import 'firebase/firestore';



const DialogItem = (props) => {

    let path = "dialogs/" + props.id;

    return <div className="dialog-item">
    <NavLink to={path}> {props.name} </NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
        


    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
    
}

export default Dialogs;