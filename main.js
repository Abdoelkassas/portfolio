let close1 = document.querySelector(".one")
let close2 = document.querySelector(".two")
let close3 = document.querySelector(".three");
let contact = document.querySelector(".contact");
let settings = document.querySelector(".settings");
let portfolio = document.querySelector(".portfolio");
let btn = document.querySelector(".con-btn");
let btn1 = document.querySelector(".set-btn");
let btn2 = document.querySelector(".port-btn");
let theme_btn = document.querySelector("#theme");

btn.onclick = function(){
    contact.classList.toggle("open")
}
btn1.onclick = function(){
    settings.classList.toggle("open")

}
btn2.onclick = function(){
    portfolio.classList.toggle("open")

}
close1.onclick = function(){
    contact.classList.toggle("open")
}
close2.onclick = function(){
    settings.classList.toggle("open")
}
close3.onclick = function(){
    portfolio.classList.toggle("open")
}

theme_btn.onclick = function(){
    document.querySelector("body").classList.toggle("change_theme")
    document.querySelector(".background").classList.toggle("background-change")
}










