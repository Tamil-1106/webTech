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

