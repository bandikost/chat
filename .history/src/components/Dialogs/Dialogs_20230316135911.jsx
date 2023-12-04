import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';



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
        <div className="chats" style={{display: messages.length > 0 ? "block" : "none"}}>
        {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
              
             
                <span className="statusChats">{chat[1].userInfo.displayName}
                <div className='status' id="status">{status}</div> </span>
              
              <div className="userChat-container">
              <p>
                {chat[1].lastMessage?.userId === currentUser.uid ? "" : "Вы: "}
                {chat[1].lastMessage?.text}
              </p>
              <p> </p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    )
    
}

export default Dialogs;