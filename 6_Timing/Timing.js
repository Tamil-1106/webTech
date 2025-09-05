
console.log("Start")
console.log("Timing function in js");

let display=()=>{
    console.log("Iam a timing function");
}
display()





// ! setTimeout(function, time-in-milliseconds)   eg:1

setTimeout(display,3000); //after 3- sec it will call the function
console.log("End")



// ! setTimeout(function, time-in-milliseconds)  eg:2

// settime will execute one time after the given time

let st=setTimeout(()=>{
    
    console.log("Iam a timing function");

},4000); //after 4- sec it will call the function




// ! setInterval(function, time-in-milliseconds)  
// setInterval will execute repeatedly after the given time


let wish = () => {
    console.log("Happy New Year");
}
setInterval(wish,2000); //after every 2-sec it will call the function


let sorry = () => {
    console.log("Sorry for late wish");
}
let sor=setInterval(sorry,3000); //after every 3-sec it will call the function



// ! clearTimeout(timeoutID)  & clearInterval(intervalID)

// clearTimeout()  will stop the setTimeout function

let st1=setTimeout(()=>{
    console.log("Iam a settimout function");
},4000);
clearTimeout(st1)  // it will stop the setTimeout function


// clearInterval() will stop the setInterval function

let sor1=setInterval(()=>{
    console.log("Iam a setInterval function");
},3000);
clearInterval(sor1)  // it will stop the setInterval function