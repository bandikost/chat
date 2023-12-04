import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (       
        <div className={s.content}>
            <div className="dialogs-item">
                <div className="item">
                    BoBka
                </div>
                <div className="item">
                    BoBka
                </div>
                <div className="item">
                    BoBka
                </div>
                <div className="item">
                    BoBka
                </div>
                <div className="item">
                    BoBka
                </div>
            </div>
            <div className="messages">
                <div className="message-item">1</div>
                <div className="message-item">1</div>
                <div className="message-item">1</div>
            </div>
        </div> 
    )
}

export default Dialogs;