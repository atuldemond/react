// -----------SPREAD OPERATOR-------------------

//Arrays
var name =["atul","mohan","rahul"]
var copy =[...name];
copy.pop();
// ------------------------------------------------------------
//Objects
var state={
    name:"Atul Demond",
    age:23,
    addres:"sasaram"
}
var copy2 = {...state}
copy2.addres="Delhi";

//---------------------------Destructuring--------------------

var obj2 ={
    name:"Radha",
    age:22
}

const {age}= obj2;


var obj3= {
    name:"social",
    facebook:{
        first:"Atul Demomd",
        sec:"hello"
    },
}
const {sec}= obj3.facebook;

// ---------------------------array-------------------


var arr45 = [12,function(){},2312221]

// var [first,second]=arr45;
var [first,,third]=arr45;



// ------------import and export-----------------


//arrow funtion -----------------------


let add = ()=>{
    let a = 23
    let b =12
    return a+b;
}

add();

//arrow funtcion with abcd---------------------------

let onapra = a =>{  //fat arrow function with one paras

    return a;
}
onapra(2222222222);



let sub = (a,b)=>{//fat arrow function with two 

    return a-b;
}
sub(23,45);

let rutn = re => "Atul Demond"; //returning back

console.log(rutn("mango"))


//retuning object-------------------------->

let hii = () =>({name:"Atul Demond", age:23})
console.log(hii())



// Map Filter Function --------------------******

// both function running on array and returing 
// new arary

//map perform something on array element 
// ?return some valu in form of array
var a =[1,2,3,4,5,6]

let final1 = a.map((value)=>{  //large 
    return value*12
})

let final = a.map(value => value*12)  //short hand

 
 
// filter function ---------------------------******

// its romver some elemnt acoordingly to  you and 
// ?return  all value rest is left

var arr121 = [1,2,3,4,6,6,7,8]
const final_11 = arr121.filter(elm => elm>4)
console.log(final_11)