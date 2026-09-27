// /*

// Below are all primitive types in types

//     string->store text
//     number->integer,real
//     boolean
//     undefined
//     null 
//     bigint
//     symbol

//     var<variable_name>:number=<value>;type annotation or type signal
//  */

// let id:number = 5;
// let firstName:string="Sanket";
// // let firstName="Sanket"; type script automaticaly detects  its type first name always store as string;
// var lastName:string="Singh";
// // firstName=false;// Error:Type 'boolean' is not assignable to type 'string'.
// console.log(id,firstName,lastName);

// // Union of types
// let userId:number|string ="26"; // userId both number or string type
// userId=10;
// console.log(userId);

// /*
// Array in ts
// let  <variable_name>:type []=[var1,var2,var3]

//  */

// let arr:number[] =[1,2,3,4,5] // like cpp java only number include in array not like js where you can add any variable you want;
// let arr2:any[]=[1,"Shreeya",2,"Shashank",true,false];
// console.log(arr,arr2);


// // Union of types in arr

// let nums:(number|string|boolean)[]=[1,"Sanket",true]; // this nums array only contain numbers string and boolean
// // any is special type for any variable_name

// let i:any=2;
// i="Starting";
// i=true

// console.log(i,nums);

// //Array in form of type tuple
// let data1:[number,string,boolean]=[1,"sanket",true];

// /**
//  * How to define types for objects
//  * -classes
//  * -interface
//  */
// interface Product{
//     name:string,
//     price:number,
//     brand:string


// }

// let p1:Product={
//     name:"Iphone",
//     price:100000,
//     brand:"apple"
// };
// let c1:Product={ 
//     name:"Samsung",
//     price:100000,
//     brand:"apple"
// };
// p1=c1; // both are equal because both type are product

// console.log(p1);

// interface Animal {
//     name: string;
//     makesound(): void;
// }

// class Dog implements Animal {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     makesound(): void {
//         console.log("woof!!!!!");
//     }
// }
// const dog=new Dog("tommy");
// console.log(dog.name);
// console.log(dog.makesound());


// function sum(a:number,b?:number):number{
//     return a+(b||0);

// }

// console.log(sum(1,2));
// console.log(sum(10));

// const dob= new Date(1998,3,11);

// console.log(dob);
// console.log(dob.getDate());
// console.log(dob.getUTCMonth());

// let x; // this variable x is of type any
// x="10";
// x=5;
// function fun():number|string{
//     return 20;
// }

// console.log(fun());


/**
 * ENUMS or Enumeration
 * 
 * Enums in TypeScript

An enum is used when you have a fixed set of related values.

Think of it as:

Enum = a collection of predefined choices
 * 
 * 
 * enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
}
let today: Day = Day.MONDAY;
 */
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
console.log(Direction.Up);
enum TicketStatus{
    INITIALSED="INITIALSED",
    CANCELLED="CANCELLED",
    PENDING="PENDING",
    CLOSED="CLOSED"
}
console.log(TicketStatus.INITIALSED);

// enum is just  special class that going to represent set of constant that not going to change
const Ticket={
    id:1,
    title:"new ticket",
    status:TicketStatus.INITIALSED
}

if(Ticket.status==TicketStatus.INITIALSED){
    console.log("Done")
}
enum StatusCodes{
    NotFound=400,
    Success=200,
    Accepted=202,
    Created=201,
    BadRequest=400
    
}
const response={
    url:"www.something.com",
    type:"GET",
    data:"some string",
    status:StatusCodes.Success
}
console.log(response);
console.log(response.status);

const result={
    name:"Sanket",
    marks:98

}
console.log(result);

result.marks=99; // updating old key value is allowed

result.address="XYZ";//adding a new key value is not allowed but it is allowed in js4

/**
 * SO ADDRESS TYPE WE DO NOT GIVE THATS WHY WE DONT INCLUDE ADDRESS KEY
 * TYPE OF ABOVE RESULT OBJECT
 * INFERRED AS{NAME:STRING,MARKS:NUMBER}
 * const result:{NAME:STRING,MARKS:NUMBER}={
    name:"Sanket",
    marks:98

}
 * 
 *  
  / 


/** 
const object

     ↓
Cannot replace the object       ❌
Can modify existing properties  ✅
TypeScript checks new properties
                               ↓
                         address ❌
                          */

type Details={name:string,marks:number,address?:string};

const result1:Details={
    name:"Sanket",
    marks:98
}
const result2:Details={
    name:"Aniket",
    marks:98
}
interface AuthForm{
    name:string,
    submitButtonText:string,
    onReset:(e:any)=>void,
    onSubmit:(e:any)=>void
}
const LoginForm:AuthForm={
    name:"Login form",
    submitButtonText:"Login",
    onReset:(e)=>{
        //some imp

    },
    onSubmit:(e)=>{
        //some imp

    }
}
console.log(LoginForm)
type text=string;
let nameText: string = "Nakul";
// for defining custom type fro arrays ,type keyword is more easy
type stringArray=string[];
let names: stringArray = ["Nakul", "Rahul", "Aman"];
// using an interface we will define an object which will be always having keys
// of type number and value to be of the type of the array
interface numberArray{
    [index:number]:number
}
/*
[10,20,30]
{
    0 : 10,
    1 : 20,
    2: 30,
}
*/

type pair=[number,number];
type triplet=[number,number,number];

interface pairINterface{
    first:number,
    second:number
}

type logger=(msg:string,errorCode:number)=>void;

interface loggerinterface{
    (msg:string,errorCode:number):void;

}

type unionofstrandom=number|string;
type x=complex

interface ComplexNumber{
    real:number,
    imaginary:number

}
interface ComplexNumber{
    add:(num:ComplexNumber)=>ComplexNumber
}

/** same as above same interface club
 * interface ComplexNumber{
    real:number,
    imaginary:number
    add:(num:ComplexNumber)=>ComplexNumber
}
 
 */









  







  
