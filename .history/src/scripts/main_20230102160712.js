$(document).ready(function() {
    $('button').click(function(event) { 
        $('.visible').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

