let form=document.querySelector("form")
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let n1=parseInt(document.getElementById("n1").value)
    
    let n2=parseInt(document.getElementById("n2").value)

    console.log(n1+n2);
    
    let output=document.querySelector(".box")
    output.innerHTML=`<h4>The addition of ${n1} and ${n2} is ${n1+n2}</h4>`
    console.log("add is done");
})


