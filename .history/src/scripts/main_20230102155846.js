import React from "react";


(function(){
    document.querySelector('button').click(function(event) { 
        document.querySelector('.visible').toggleClass('active');
    })
}) ();

