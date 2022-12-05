let one = document.getElementById("container");
let two = document.querySelector("#container");
let three = document.querySelectorAll(".second");
let four = document.querySelector("ol .third");
let five = document.getElementById("container");
five.innerText = "Hello";
let six = document.getElementsByClassName("footer");
six.classList.add("main");
let seven = document.getElementsByClassName("footer");
seven.classList.remove("main");
let eight = document.createElement("li");
let nine = eight.innerText = "four";
let ten = document.querySelector("ul");
ten.appendChild(nine);
let eleven = document.querySelectorAll("ol li");
for(let i = 0; i < eleven.length; i++){
    eleven[i].style.backgroundColor = "green"
}
let twelve = document.getElementsByClassName("footer");
twelve.remove;ß