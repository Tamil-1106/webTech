

// ! How to declare objects in JavaScript



let student ={
    stuname:"Tamil",
    age:21,
    course:"Btech",
    isstudent:true,
    Skills:["JavaScript", "React", "Node.js"],
    work:()=>{
        console.log("eat sleep repeat");
    },
    adress:{
        city:"Chennai",
        state:"Tamilnadu"
    }

}
console.log(student);

// ! how to access object properties

console.log(student.course);

console.log(student.Skills[1]); //React

student.work();

console.log(student.adress.city); //Chennai
console.log(student.adress.state); //Tamilnadu


let emp={
    ename:"jayanth",
    eid:101,
    esalary:25000
   
}

// !how to update any property value
console.log(emp);

emp.eid=102;

console.log(emp);

emp.phno=90909090;

console.log(emp);



// ! how to delete any property

delete emp.eid;

console.log(emp);



// ?--------------------- objects Methods---------------------


// ! 1. Objects.keys()

let player={
    playername:"Rohit",
    iscaptain:true,
    age:35
}

let keys=Object.keys(player)
console.log(keys);



// ! 2.Objects.values()

// it is used to return all the values in the form of array

let values=Object.values(player)
console.log(values);




// ! 3.objects.entries()


// it will return one nested array where all the key in the form of array.

let key_values=Object.entries(player)
console.log(key_values);



// ! 4.Object.freeze()


// using this method we cannot  add or delete or update after the execustion of freeze method it will make object frozen.

let ob1={
    obname:"pen",
    obrate:10
}
console.log(ob1);

Object.freeze(ob1)

ob1.obrate=30;
ob1.color="blue"
console.log(ob1);



// ! 5.object.isfrozen()

// this method is useed to whether the method is frozen or not if it is frozen is returns true if not returns false

console.log(Object.isFrozen(ob1))  //true
console.log(Object.isFrozen(player)) //false



// ! 6.Object.seal()

// this method can't able delete or add in this method but we can modify the existing property value.




let obj2={
    objname:"car",
    price:200000000
}
console.log(obj2)
Object.seal(obj2)

delete obj2.price
obj2.color="red"
obj2.objname="bike"
console.log(obj2)



// ! 7.object.issealed()

console.log(Object.isSealed(obj2)); //true

console.log(Object.isSealed(player)); //false


// ! 8.object.assign()


// it is used to combine 2 or more objects and it will return one new object

let ob3={
    ename:"rohit",
    phno:99900999
}
let ob4={
    city:"chennai",
    state:"TN"
}

let combined=Object.assign({},ob3,ob4)

console.log(combined);
console.log(ob4);
console.log(ob3);



// ! 9.hasownproperty()

// it uses to know the property is present or not.

console.log(ob4.hasOwnProperty("city"));
console.log(ob4.hasOwnProperty("ename"));


