

// Fetch is used to retrieve the API

let fetchData = fetch("https://fakestoreapi.com/products")
console.log(fetchData);  //PROMISE
let ol=document.querySelector("ol")


fetchData.then((data)=>{
console.log(data); // RESPONSE

let jsonData = data.json();
console.log(jsonData);  //PROMISE

jsonData.then((data)=>{
    console.log(data); //ARRAYDATA 

    data.map((ele)=>{
        console.log(ele.title);
        let li=document.createElement("li")
        ol.append(li)
        li.append(ele.title)
        
    })
})


.catch((err)=>{
console.log(err);


})


.catch((err)=>{
console.log(err);

    
})


})

