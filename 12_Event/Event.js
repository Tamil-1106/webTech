
console.log("Event in js");

let display=()=>{

    console.log("Iam display function");
    
}

let color=()=>{

  let header=document.querySelector("header")

  header.style.backgroundColor="red"

  console.log("hi")

}

let printmsg=()=>{

    alert("Good morning")
}


let copy=()=>{

   
   
let card1=document.querySelector(".card1")
let data1=card1.innerHTML
 
let card2=document.querySelector(".card2")

card2.innerHTML=data1
card1.innerHTML=""
console.log("copied");
   
}



let changebg=()=>{
   let box=document.querySelector(".box")
   box.style.backgroundColor="red"
   console.log("hiiii");
   

}
let changebg1=()=>{
   let box=document.querySelector(".box")
   box.style.backgroundColor="green"
   console.log("heloo");
   

}

