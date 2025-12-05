//there are two types statments in type script
//1. conditional or Decision making statements
//2. looping or iterative statments


//conditional statements - based on certain condition we can use conditional statments
//IF CONDITION
if(true){
    console.log("hello")
}
let age:number=18;
if(age>18){
    console.log("eligible for vote")
}
//IF-ELSE CONDITION

if(age>18){
    console.log("eligible for vote")
} else{
    console.log("not eligible for Vote")
}

let num:number=15
if(num%2==0){
    console.log(`${num} is Even number`)
}
else{
    console.log(`${num} is not even Even number`)
}

//IF ELSE IF - nested if else condtion
// main use case from autoamtion perspective - we can use when we select browser mode

let fname:string="Dayanand"

if(fname=='daya'){
    console.log("name matched at first condition")
} else if(fname='DAYANAND'){
    console.log("name matched at 2nd condition")
} else if(fname="Dayanand"){
    console.log("name matched at 3rd condition")
} else {
    console.log("name not matched")
}

//Switch case statement - 
// difference between condition and expression - expression can return anything, condition will return true or 
//false
let day:number=3
switch(day){
    case 1:
         console.log("Sunday")
         break
    case 2:
         console.log("Monday")
         break  
    case 3:
         console.log("Tuesday")
         break
    case 4:
         console.log("Wednesday")
         break
    case 5:
         console.log("Thursday")
         break
    case 6:
         console.log("Friday")
         break     
    case 7:
         console.log("Saturday")
         break     

    default:
        console.log("invalid number")
}

let num1:number=20;
let num2:number=30;
switch(num1+num2){
    case 10:
        console.log("yes sum is 10")
        break
    case 20:
        console.log("yes sum is 20")
        break
    case 50:
        console.log("yes sum is 50")
        break
    case 60:
        console.log("yes sum is 60")
        break          
    default: console.log("no case available")
}

// Iterative or looping statments 
// what is loop - group of statments we can repeat or execute multiple times based on condtion 
// WHILE LOOP - while loop will execute until condition is false and three important things you should 
// starting point, incrementation, ending point 
// print 5 numbers

let value:number=1
while(value<10){
    console.log(value)
    value++
}

