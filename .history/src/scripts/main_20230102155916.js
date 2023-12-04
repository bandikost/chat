import React from "react";


(function test(){
    document.querySelector('button').click(function(event) { 
        document.querySelector('.visible').toggleClass('active');
    })
}) 
test();

export default test;

