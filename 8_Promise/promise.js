

// Promise is used to handle asynchronous operations in JavaScript. 
// we can promise  by using new keyword
// it takes two parameters resolve and reject
// resolve is called when the operation is successful
// reject is called when the operation fails

// A Promise is in one of these states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// for handling the resolve we need to use .then() method and for handling the reject we need to use .catch() method

// finally block is used to execute the code after the promise is settled (either resolved or rejected)



let  p=new Promise((resolve,reject)=>{


    let a=true

if(a){
    resolve("success")
}
else{
    reject("failed")
}

})
console.log(p);

p.then((data)=>{
    console.log(data);
})
.catch((d)=>{
    console.log(d);
})


// Finally block
.finally(
    console.log("Promise is settled")
)

