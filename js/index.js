// Your code goes here

//CLICK WITH STOP PROPAGATION
const introP = document.querySelector(".intro p");
introP.addEventListener("click", (event) => {
    introP.style.color = "goldenrod";
    event.stopPropagation();
});

const introduction = document.querySelector(".intro")
introduction.addEventListener("click", (event) => {introduction.style.backgroundColor = "red"});

const main = document.querySelector(".home");
main.addEventListener("click", (event) => {main.style.backgroundColor = "pink"});

//DOUBLE CLICK
main.addEventListener("dblclick", (event) => {main.style.backgroundColor = "blue"});

//MOUSEOVER AND MOUSEOUT
const bottom = document.querySelector(".footer");
bottom.addEventListener("mouseover", (event) => {bottom.style.backgroundColor = "green"});
bottom.addEventListener("mouseout", (event) => {bottom.style.backgroundColor = "orange"});

//MOUSEDOWN AND MOUSEUP
const welcome = document.querySelector(".intro h2");
welcome.addEventListener("mousedown", (event) => {welcome.style.fontSize = "5rem"});
welcome.addEventListener("mouseup", (event) => {welcome.style.fontSize = "2rem"});

//DRAG AND DRAGEND
const navigation = document.querySelector(".nav");
navigation.addEventListener("drag", (event) => {navigation.style.backgroundColor = "purple"});
navigation.addEventListener("dragend", (event) => {navigation.style.backgroundColor = "magenta"});

//CONTEXTMENU
const busImg = document.querySelector(".intro img");
busImg.addEventListener("contextmenu", (event) => {gsap.to(busImg, {rotation: 360, duration: 2})});

//MOUSEENTER AND MOUSELEAVE
const funBus = document.createElement("audio");
funBus.src = "music/Vengaboys - We like to Party! (The Vengabus).mp3"
const logoText = document.querySelector(".logo-heading");
logoText.addEventListener("mouseenter", (event) => {funBus.play()});
logoText.addEventListener("mouseleave", (event) => {funBus.pause()});

//PREVENT DEFAULT
document.querySelector("a:nth-of-type(1)").addEventListener("click", (event) => {event.preventDefault()});
document.querySelector("a:nth-of-type(2)").addEventListener("click", (event) => {event.preventDefault()});
document.querySelector("a:nth-of-type(3)").addEventListener("click", (event) => {event.preventDefault()});
document.querySelector("a:nth-of-type(4)").addEventListener("click", (event) => {event.preventDefault()});

//STRETCH GSAP
const zoom = document.querySelector(".text-content h2");
zoom.addEventListener("click", (event) => {gsap.to(zoom, {duration: .5, x: 1500});});
