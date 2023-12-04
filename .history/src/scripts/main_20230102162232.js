function readMore () {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display ===  "none") {
        dots.style.display ===  "inline";
        btn.style.display === "Скрыть";
        more.style.display === "none";
    }
}