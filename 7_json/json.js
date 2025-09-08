

// ? what is JSON? 
// ?json(javascript object notation) is a lightweight data interchange format.
// ?it is easy for humans to read and write.
// ?it is easy for machines to parse and generate.


// ! Advantages of JSON

// ? Human Readable

// JSON is easy for developers to  read and understand and write. 

// ? Lightweight   

// JSON is a minimal format that reduces the size of the data being transmitted.

// ? Language Independent

// JSON CAN BE USED WITH MANY PROGRAMMING LANGUAGES.
// including javascript,python,java,c# etc.







let person= {
    pname:"Tamil",
    age:22,
    city:"India",
    ishuman:true
}
console.log(person);

// ! JSON.stringify() - object to json

// this method is used to convert any javascript object into json format.
// json format is string format

let jsdata=JSON.stringify(person);
console.log(jsdata);
console.log(typeof jsdata);



// ! JSON.parse() - json to object

// this method is used to convert json format into javascript object.


let objdata=JSON.parse(jsdata);
console.log(objdata);


// !-------------------------------------------------------------


// ! JSON with array of objects 


let employee=[
    {
        eid:1,
        ename:"Tamil",
        esalary:25000
    },
    {
        eid:2,
        ename:"thiruchitrabalam",
        esalary:30000       
        
    },
    {
        eid:3,
        ename:"rohit",
        esalary:35000
    }

]

console.log(employee);

employee.map((ele)=>{
    console.log(ele.ename)
    
})


// ----------------------------------------------


// ! object destructure


let student ={
    stu1 :"dhanush",
    age:24,
    city:"chennai",
    ismarried:true,
    skills:["html","css","js","react"]
}

let {stu1, age, city, ismarried, skills} = student
console.log(stu1,city);




// ! rest  parameter

let display=(a,b,...c)=>{
    console.log(a);

    console.log(b);

    console.log(c);
    
}
display(1,2,3,4,5,6,7,8,9,10)




// ! spread operator

let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]


let arr3=[...arr1,...arr2]
console.log(arr3);


let arr4=[1,2,3,4,5,6,7,7,8,9,10]

let [a,b,...c]=arr4
console.log(a);
console.log(b);
console.log(c);



//-------------------------------------------------------------