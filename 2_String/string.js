// ! how to declare string

let str1="hello"
console.log(str1);
console.log(typeof str1);

let str2='jayakanth'
console.log(str2);
console.log(typeof str2);

let str3=`TAMIL`
console.log(str3);
console.log(typeof str3);



//! HOW TO KNOW THE LENGHT OF THE STRING

let str4="hello IM TAMIL"

console.log(str4.length);       //LENGTH OF STRING


//!--------------------------------------------------------------------------------




//! METHODS OF STRING

//! 1.  to.uppercase()

//this method is used to change the string into uppercase and it will return a new string

let tname="tamil"
let upper=tname.toUpperCase();// Converts to uppercase
console.log(upper);
console.log(tname); //original string will not change




//! 2.  to.lowercase()

//this method is used to change the string into lowercase and it will return a new string



let t1name="TAMIL"
let lower=t1name.toLowerCase();// Converts to lowercase
console.log(lower);
console.log(t1name); //original string will not change



//! 3. trim()

//this method is used to remove white-space from both sides of a string and it will return a new string

let t2name="   rohith   "
console.log(t2name.length);

let trim=t2name.trim();

console.log(trim);
console.log(trim.length);

console.log(t2name); //original string will not change





//! 4.indexOf()

//this method is used to find the index of the first occurrence of a specified value in a string and it will return the index



let t3name="good morning"
let index=t3name.indexOf("o");
console.log(index); //1




//! 5.LastIndexOf()

//this method is used to find the index of the last occurrence of a specified value in a string and it will return the index


let lastIndex=t3name.lastIndexOf("o");
console.log(lastIndex); //6




//! 6.charAt()

//this method is used to return the character at a specified index in a string


console.log(t3name.charAt(5)); //m



//! 7.concat

//this method is used to join two or more strings and it will return a new string

let s1="tamil"
let s2="nadu"
let s3=s1.concat(" ",s2, "!!!!")
console.log(s3)



//! 8.includes

//this method is used to check whether a string contains or not in a string and it will return true or false

let t4name="good morning"
console.log(t4name.includes("o")); //true
console.log(t4name.includes("evening")); //false
console.log(t4name.includes("Good")); //false case sensitive coz G is uppercase



// ! 9.replace()
// this method is used to replace one string  wih another string
//it will returns new string


let nam="rohith  is a developer"
console.log(nam.replace("e", "r")); 
console.log(nam); //original string will not change



// ! 10.replaceAll()
//this method is used to replace all occurrences of a value  in a string with another value
//it will returns new string

console.log(nam.replaceAll("e", "r"));
console.log(nam); //original string will not change





// ! 11.split()

//this method is used to split any string into array 

let str5="good afternoon everyone"
console.log(str5.split(" "))

// ! 12.slice

// it is used to extract one string from another string 
// it will take two parameters( start Index , end Index)
// it will not includes the endIndex value
// here we can give negative value also 
// we can traverse only from left to right side

let str6=" good afternoon"
console.log(str6.slice(0,4)) //goo
console.log(str6.slice(5)) //afternoon 
console.log(str6.slice(-4,-2))

// ! 13. substring

// it is also used to extract one string from another string 
// calci eg:1234 - now to remove 4 how to write(str.slice(0,str,length-1))we no need to give str.length-1 ...we can give(0,-1)
// substring convert negative value into zero 

console.log(str5.substring(0,3))  //goo
console.log(str5.substring(5))    //afternoon
console.log(str5.substring(-4))//good 
// afternoon 
console.log(str5.substring(4,0))  //good

//  ! 14. string Interpolation
let a= 40
let b= 20
console.log("the sum of a and b is " + (a+b)); //old method