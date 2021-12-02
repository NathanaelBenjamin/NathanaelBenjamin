const btn = document.getElementById("btn");
const cross = document.getElementById("cross");
const navbar = document.getElementById("nav");
const body = document.getElementById("body");

const openNav = ( ) => {
navbar.classList.remove("navbar");
navbar.classList.add("show");
btn.classList.remove("yellowbg");
body.style.opacity = "0.9";
}

const closeNav = ( ) => {
    navbar.classList.add("navbar");
    navbar.classList.remove("show"); 
    btn.classList.add("yellowbg");
    body.style.opacity = "1";
}