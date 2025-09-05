

let arr=[1,"html",true,[3,4]]
console.log(arr);

// ! How to find the length of an array
console.log(arr.length);

// ! How to access elements of an array
console.log(arr[0]); // 1
console.log(arr[1]); // "html"
console.log(arr[2]); // true
console.log(arr[3]); // [3, 4]



// ! Array methods
// ! 1. push()
// *push method is used to add the element at the end of the array

let arr1=[1,3,4,55]

console.log(arr1);

arr1.push(100) // add element at the end

console.log(arr1);




//! 2.pop()
// *pop method is used to remove the last element from the array

let arr2=[1,2,3,4,5]

console.log(arr2);

arr2.pop() // remove last element

console.log(arr2);

// !3. unshift()

// *this method is used to to add element at the starting of the array

let arr3=[1,2,3,4,50]

console.log(arr3);

arr3.unshift(5) // add element at the beginning

console.log(arr3);

// ! 4. shift
// *shift method is used to remove the first element from the array

let arr4=[10,20,30,40,50]

console.log(arr4);

arr4.shift() // remove first element

console.log(arr4);

// ! 5.includes()

// *this is used to check if an array includes a certain value
// *and it will return boolean value

 let arr5=[1,2,3,44,4,5]

 console.log(arr5.includes(3)); // true

 console.log(arr5.includes(6)); // false




//  ! 6.indexOf()

// *this is used to find the index of a certain value
//* and it will return the index or -1 if not found

 let arr6=[1,2,3,44,4,5]

 console.log(arr6.indexOf(3)); // 2

 console.log(arr6.indexOf(6)); // -1


//  ! 7.Lastindexof()

// *this is used to find the last index of a certain value
// *and it will return the index or -1 if not found

 let arr7=[1,2,3,44,4,5]

 console.log(arr7.lastIndexOf(4)); // 4

 console.log(arr7.lastIndexOf(6)); // -1




//  ! 8.concat()

//* this is used to merge two or more arrays
//* and it will return a new array

 let arr8=[1,2,3]
 let arr9=[4,5,6]

 let arr10=arr8.concat(arr9)

 console.log(arr10); // [1,2,3,4,5,6]


 //! 9.reverse()

// *this is used to reverse the order of the elements in an array
//* and it will return the reversed array

 let arr11=[1,2,3,4,5,6]

 let arr12=arr11.reverse()

 console.log(arr12); // [6,5,4,3,2,1]



//  ! 10.join()


//* this is used to join all elements of an array into a string

let arr13=['hel','l','o']   

let str=arr13.join("")

console.log(str); // "hello"

let str2="tamil"
splitStr=str2.split("")

console.log(splitStr); // ["t", "a", "m", "i", "l"]
splitStr.reverse()


 


// ! higherorder array methods


// ! 1.map()

//* map() is a higherorder array method which is used to tranverse the array and we can do operation  with all elements
// *And this method will return one new array 
//* map() will take one callback function and here it can tke 3 parameters (elements,index,array)


let num=[10,20,30,40,50]

let res=[]
for (let i=0;i<num.length;i++){
    res.push(num[i]+200)
}
 console.log(res);


//* using map()

let tamil=num.map((ele,index,array)=>{

    return ele+200
})
console.log(tamil);


let sub=["html","css","java"]

let s2=sub.map((ele)=>{
    return ele.toUpperCase()
})
console.log(sub);

console.log(s2);


// !  2.filter()

// * it is one higherorder array method it is used to traverse  the array and check the condition snd it will return one new array.

//* filter() will take one callback function and here it can take 3 parameters (elements,index,array)

let f=num.filter((ele)=>{

    return ele>20
})
console.log(f);


// !  3.reduce()

//* this is used to reduce the array elemnts into single value by adding or multiplying.

//* it is also a higher order array method it will take 4 parameters in the callback fuction (acc,ele,index,array)

 let sum=num.reduce((acc,ele)=>{
   
    return acc+ele
})
console.log(sum);



let mul=num.reduce((acc,ele)=>{
    return acc*ele
})
console.log(mul);



// ! 4.sort()

//* sort() is higherorder method it is used to sort the array into asc and desc
//* it takes two parameters in the callback function if we are giving firstparameter-secondparameter it will give asc order and opp one it wil give desc order.


let tam=[5,6,2,34,56,12,78,990]
let asc=tam.sort((a,b)=>{
return a-b
})
console.log(asc)

let desc=tam.sort((a,b)=>{
return b-a
})
console.log(desc)





// ! 5.foreach()
// this method cannot return  

let array=[2,7,8,10,11]
array.forEach((ele)=>{
    console.log(ele+100)
    
})
