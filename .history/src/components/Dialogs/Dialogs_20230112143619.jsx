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
        
    let dialogs = [
        {id: 1, name: 'Vladimir'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Stsik'},
        {id: 4, name: 'Roman'},
        {id: 5, name: 'Stepan'},
        {id: 6, name: 'Bot'}
    ]   

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are u'},
        {id: 4, message: 'Stop talking'},
        {id: 5, message: 'God damn'},
        {id: 6, message: 'Siu'}
    ] 


    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messages.map( m => <Message message={m.message}/> );

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