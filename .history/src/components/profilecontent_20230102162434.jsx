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
        <button id="btn" onclick="readMore()">Подробнее</button>
      </div>
    );
}

function readMore () {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementById("btn");

  if(dots.style.display ===  "none") {
      dots.style.display ===  "inline";
      btn.style.display === "Скрыть";
      more.style.display === "none";
  } else {
      dots.style.display ===  "none";
      btn.style.display === "Подробнее";
      more.style.display === "inline";
  }
}

export default Profilecontent;