

let username=localStorage.getItem("sname")

let h2=document.createElement("h2")

h2.innerText=`welcome to my app ${username}`

let h1=document.querySelector("h1")

h1.after(h2)
