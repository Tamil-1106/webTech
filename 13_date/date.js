

let time= new Date()
console.log(time);

console.log("now hour is",time.getHours());

console.log("minutes is",time.getMinutes());

console.log("seconds is",time.getSeconds());

console.log("Today date is",time.getDate());

console.log("year is",time.getFullYear());


let day=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

console.log("today is",day[time.getDay(5)]);

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log("this month is",months[time.getMonth(9)]);

console.log(time.toLocaleDateString());

console.log(time.toLocaleTimeString());

let display=()=>{
  let d=new Date()
  

  let output=document.querySelector(".output")

  output.innerHTML=`<h2> ${d.toLocaleTimeString()}</h2>`


}
display()
setInterval(display,1000)





// ! math object

console.log(Math.sqrt(16));
console.log(Math.abs(-78));


console.log(Math.max(6,8));
console.log(Math.min(10,6));

console.log(Math.ceil(5.8));
console.log(Math.ceil(6.1));



console.log(Math.floor(5.9));
console.log(Math.floor(5.99999));




console.log(Math.round(80.99));
console.log(Math.round(50.9999));


console.log(Math.floor(Math.random()*10))







