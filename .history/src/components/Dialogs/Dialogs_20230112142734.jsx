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
        {id: 6, name: 'Bot'},
    ]    
}

export default Dialogs;