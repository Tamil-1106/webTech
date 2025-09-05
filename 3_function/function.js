// ! 1.Named function

function display()
{
    console.log('iam display function');
    
}
display()


function add(a,b)
{
    console.log(a+b);  
}
add(5,5)
add(10,20)

// ! function with return keyword

function sub(a,b)
{
    return a-b;
}
sub(90,40)
let res = sub(90,40)
console.log(res);


// function with express

let msg =function()
{
    console.log("hello everyone");
}
msg()

function add(a,b)
{
console.log(a+b);
}
add(10,20)




// !Arrow function

let multiply =(a,b)=>{
    console.log(a*b);
}
multiply(10,20);


// !  Nested function

let outer=()=>{
    console.log("im outer function");

    let inner=()=>{
        console.log("im inner function");
    }
    inner();
   
}
outer();


//  ! lexical Scopping
// In nested function inner function can access outer function variables but outer function cant access the properties of inner function , this is called as lexical scoping

let parent=()=> {
    
    let a=10
    let child=()=>{
         let b=20
        console.log(a);
        console.log(b);
    }
       child();
 
}
parent();






// ! Higher order function and call back function

// Any function that another function as a parameter .
// The function we are sending as a parameter to the higherorder function is called as callback function./

let hof =(a)=>{

    a()

}
hof (()=>{


    console.log("high order and callback function");

});





//! IIFE Immediately Invoked Function Expression
(function()
{
        console.log("I am an IIFE Function")
    })();
    

