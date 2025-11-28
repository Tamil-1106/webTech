

let form=document.querySelector("form")
console.log(form);


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    sname=document.getElementById("sname").value
    console.log(sname);

    smail=document.getElementById("smail").value
    console.log({smail});
    
    console.log("Form submitted");
    
})