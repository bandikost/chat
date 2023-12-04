import React from "react";
import readMore from "../scripts/main";
const Profilecontent = () => {
    return (
      <div className="name">10
        <p>fghjklsg;dfhgidjfghfghjklsg;dfhgidjfghfghjk
          <span id = "dots">....</span>
          <span id ="more">lsg;dfhgidjfghfghjklsg;dfhgidjfghfghjklsg;dfhgidjfgh
            fghjklsg;dfhgidjfghfghjklsg;dfhgidjfghfghjklsg;dfhgidjfgh
          </span>
        </p>
        <button id="btn" onClick = {() => console.log(readMore)}>Подробнее</button>
      </div>
    );
    
}



export default Profilecontent;