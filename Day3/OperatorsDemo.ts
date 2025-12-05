//operators

let a:number=10, b:number=20;

//arthematic operators
console.log(a+b)
console.log(b-a)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//Assigmenet operators/shorthand operators =, +=
a=10
b=5
a+=b
console.log(a)
console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)

//relational opeartors/comparision operators - always returns boolean value true/false
//> < >= <= ==(equality) != ===(strict equality)

a=10
b=20
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)
console.log(a!=b)

console.log(a===b)

let num1:any=10
let num2:any="10"
console.log(num1==num2) // only compares values
console.log(num1===num2) //compares the values along with types

//logical operators - && || ! 
//returns true/false (boolean)
//work between boolean variables
//logical operators can be used along with relational operators

let b1:boolean=true
let b2:boolean=false
console.log(b1&&b2)
console.log(b1||b2)
console.log(!b1)

// Increment and decrement operators
//increment - ++ post increment and pre increment
//decrement - -- post decrement and pre decrement
let x:number=10
console.log(x++)
console.log(++x)

//ternary operator/ conditional operator -> ? :

