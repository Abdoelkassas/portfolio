let close1 = document.querySelector(".one")
let close2 = document.querySelector(".two")
let contact = document.querySelector(".contact");
let settings = document.querySelector(".settings")
let btn = document.querySelector(".con-btn");
let btn1 = document.querySelector(".set-btn");
let theme_btn = document.querySelector("#theme")

btn.onclick = function(){
    contact.classList.toggle("open")
}
btn1.onclick = function(){
    settings.classList.toggle("open")

}
close1.onclick = function(){
    contact.classList.toggle("open")
}
close2.onclick = function(){
    settings.classList.toggle("open")
}
theme_btn.onclick = function(){
    document.querySelector("body").classList.toggle("change_theme")
    document.querySelector(".background").classList.toggle("background-change")
}










