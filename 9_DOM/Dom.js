// ! 1. How to target elements

// ?1. By id we can target


let logo=document.getElementById("logo")
console.log(logo);



//? 2. By classname


let cards=document.getElementsByClassName("card")
console.log(cards);


let seccard=cards[1]
console.log(seccard);

let btn=document.getElementsByClassName("btn")
console.log(btn[0]);


// ? 3.By TagName


let Lists=document.getElementsByTagName("li")

console.log(Lists[1]);


// ? 4.Query Selector()


let logo2= document.querySelector("#logo")

console.log(logo2);


let card1=document.querySelector(".card")

console.log(card1);

let li=document.querySelector("li")

console.log(li);


let c=document.querySelectorAll(".card")
console.log(c[1])



// ! How to get / set content inside elements

// get

let cardss=document.getElementsByClassName("card")
console.log(cardss[1].innerText);
console.log(cardss[1].innerHTML);


// set
console.log(cardss[2]);
cardss[2].innerHTML="Hello World"

// cardss[2].innerText="<h1>Hello World</h1>"

