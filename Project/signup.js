


let form=document.querySelector("form")

console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    ename=document.getElementById("ename").value
   

    mail=document.getElementById("mail").value
    
    num=document.getElementById("num").value

    password=document.getElementById("password").value
    console.log({ename,num,mail,password});


    
    alert("signup successful")
    open("./login.html")

    // !local storage   

    localStorage.setItem("Sname",ename)
    localStorage.setItem("Smail",mail)
    localStorage.setItem("Snum",num)
    localStorage.setItem("spass",password)
    

    console.log("Form submitted");
    
})

// !Local Storage

localStorage.setItem("actorname","vijay")

console.log((localStorage.getItem("actorname")));

// console.log((localStorage.removeItem("actorname")));

