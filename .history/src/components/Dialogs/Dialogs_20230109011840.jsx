import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (       
    <div className={s.content}>
        <div className="content-container">
            <div className="dialogs">
                <div className="dialog-item">
                    BoBka
                </div>
                <div className="dialog-item">
                    BoBka
                </div>
                <div className="dialog-item">
                    BoBka
                </div>
                <div className="dialog-item">
                    BoBka
                </div>
                <div className="dialog-item">
                    BoBka
                </div>
            </div>
            <div className="messages">
                <div className="message-item">1</div>
                <div className="message-item">1</div>
                <div className="message-item">1</div>
            </div>
        </div>
        </div> 
    )
}

export default Dialogs;