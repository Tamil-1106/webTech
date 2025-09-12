
let getData = async ()=>{

    try{
        let res= await fetch("https://fakestoreapi.com/products")
        console.log(res)

        let api= await api.json();
        console.log(api);
        
        
    }
    catch(err){

    }
}

getData()