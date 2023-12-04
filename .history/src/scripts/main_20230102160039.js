import React from "react";


function Test(){
    document.querySelector('button').click(function(event) { 
        document.querySelector('.visible').toggleClass('active');
    })
}
Test();

export default Test;

