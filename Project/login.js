let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    

    let lmail=document.getElementById("lmail").Value

    let lpass=document.getElementById("lpass").Value

    console.log({lmail,lpass});

    
   
    
    let smail=localStorage.getItem("smail")
    let spass=localStorage.getItem('spass')

    console.log({smail,spass});


    if(smail==lmail && spass==lpass)
    {
        alert("login successful")
        open("./home.html")

    }
    else{
        alert("wrong credentials")

    }

    
        


    
})