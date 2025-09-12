// ! 1. How to target elements

// ?1. By id 


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



// ! How to apply css 


let item=document.getElementsByTagName("li")
console.log(item);

let about = item[1]
console.log(about);

about.style.color="red"
about.style.textDecoration="underline"
about.style.backgroundColor="black"
about.style.padding="20px"



// ! How to add / remove class

let firstcard=document.querySelector(".card")


console.log(firstcard.classList)

firstcard.classList.add("tamil")
console.log(firstcard.classList)


// how to remove class

// firstcard.classList.remove("tamil")
// console.log(firstcard.classList)

// ! How to create elements

let div=document.createElement("div") //to create a div element 
div.classList.add("circle")
// cardss[2].after(div)

// cardss[2].before(div)

// cardss[2].append(div)

cardss[2].prepend(div)


// 

let footer=document.createElement("footer")
footer.classList.add("footer")
footer.innerHTML="<h3>This is footer,dom@2025</h3>" 


let Main=document.querySelector("main")
console.log(Main)

Main.after(footer)
console.log(footer)


