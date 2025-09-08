console.log("Iam external Javascript")


 // how to declare variable
let sname="tamizh"
console.log(sname);

// let sname re-declaration is not possible in let keyword




var age
age=22
console.log(age);

age=44
console.log(age);

//  Re-declaration is  possible in Var keyword






const aadhaarno=123456789021;
console.log(aadhaarno);

// const= we need to declaration and initializer in same line ...both d&i is not possible






// -----------------------------------------------------------------






// datatypes in js are

// ! 1.primitive dt    2.non-primitive dt



//  1.number   


let phno=1234567890
console.log(phno );
console.log(typeof phno);


let salary=12445.0000
console.log(salary );
console.log(typeof salary);



//2.boolean

let ismarried=true

console.log(ismarried);
console.log(typeof ismarried);


let haskid=false

console.log(haskid);
console.log(typeof haskid);



//3.string

let loc="chennai"
let state=`tamilnadu`
let country='india'

console.log(loc);
console.log(state);
console.log(country);

console.log(typeof loc);
console.log(typeof state);
console.log(typeof country);






// 4.undefined

//Any variable is  declared butnot initialized is called undefined.

let wifename
console.log(wifename);
console.log(typeof wifename);



// 5.null

let hasGf=null
console.log(hasGf);
console.log(typeof hasGf);   //object



// 6.bigint


let largenum=2n
console.log(largenum);
console.log(typeof largenum); //bigint




// ! 2.non-primitive data types

// array,function,object


// * 1.Array

 let arr=["apple",20,true,undefined,null]
 console.log(arr);



 //* 2.functions
 function add()
 {
    console.log("im add func");

 }
 add()



// * 3.Objects

let emp={
    ename:"miller",
    eid:12,
    eage:30,
    esal:45000
}
console.log(emp);
console.log(emp.ename);
console.log(emp.eid);
console.log(emp.eage);
console.log(emp.esal);








// --------------------------------------------------------------------

// !var

console.log(sna); // undefined
var sna="hello"
console.log(sna)



// ! Let 

// console.log(ph); // error
// let ph=1234567890
// console.log(ph);



{
    var b=20;
    let r=10;
    const pi=3.14;
}
