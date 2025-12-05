// variable - it is container to store data values
// when to use var, let and const depends on the below ascpects
/* 
1. Scope
2. Declartion/ value assignment
3. Redeclaration
4. reinitialization/reassigement 
5. Hoisting
*/

/* Scope - we have two different types of scopes, functional scopr and block scope
var comes under functional scope
let and const comes under block scope
functional scope - when we declare variable inside a function using var keyword
, it is accessible only within that function
block scope - when we declare variable inside a block using let and const keyword
, it is accessible only within that block
so mostly make use of let and const keywords
var keyword is not preferable, rather we can use let and const keywords
*/

function varScope(){

    if(true){
        var name="john";
        console.log("inside block",name); // john
    }
    console.log("outside block",name); // john
}

varScope();

function letConstScope(){

    if(true){
        let age=25;
        const city="New York";
        console.log("inside block",age); // 25
        console.log("inside block",city); // New York
    }
    //console.log("outside block",age); // Error: age is not defined
    //console.log("outside block",city); // Error: city is not defined
}

 
letConstScope();

/* 

Declaration/value assignment 

var can be declared without initilization 
let also van be declared without initilization
But const should be declared and initiliazed for sure 

*/
// example for var without declaration or initilization - allowed
var employeeName;
console.log(employeeName)
employeeName="Dayanand";
console.log(typeof(employeeName));
console.log(employeeName)

// example for let with declaration or initilization - allowed
let studentName;
console.log(studentName)
studentName="ravi";
console.log(studentName)
console.log(typeof(studentName))

// example for const with declaration or initilization - should initlize value while declaration only 
const teacherName=null;
console.log(teacherName)
//teacherName="ravi";
console.log(teacherName)
console.log(typeof(teacherName))


/* 
Redeclaration 

var - will allows redeclaration, meaning same variable name we can redefine with same or diiferent values
let and const - won't allows redeclaration, once variable is created it will be the final with that name 
*/

// example for var with re-declaration - allowed
var employeeName;
console.log(employeeName)
employeeName="Mahesh";
console.log(typeof(employeeName));
console.log(employeeName)

// example for let with re-declaration  - not allowed that's gives error for below 
// let studentName;
// console.log(studentName)
// studentName="suresh";
// console.log(studentName)
// console.log(typeof(studentName))

// example for const with re-declaration - not allowed that why gives error for below 
// const teacherName=null;
// console.log(teacherName)
// //teacherName="ravi";
// console.log(teacherName)
// console.log(typeof(teacherName))

/* 
reinitilization or re-assignement 

var and let - reassignement allowed, reassignment of value is allowed
const - reassigmenet not allowed, once declared that will be constant for ever
*/
var employeeName;
console.log(employeeName)
employeeName="rajesh";
console.log(typeof(employeeName));
console.log(employeeName)

// example for let with re-declaration  - not allowed that why gives error for below 
// let facultyName;
// console.log(facultyName)
// let facultyName="naveen";
// console.log(facultyName)
// console.log(typeof(facultyName))
// let facultyName="suresh"
// console.log(facultyName)

// example for const with re-declaration - not allowed that why gives error for below 
// const teacherName=null;
// console.log(teacherName)
// //teacherName="ravi";
// console.log(teacherName)
// console.log(typeof(teacherName))


/* 
hoisting - trying to access a variable without initilizing 
here var will throw undefined, but let and const will throw an error 
*/
// examples across var, let, const
var cname;
console.log(typeof(cname))
console.log(cname)
cname="suresh"
console.log(cname)
let cage;
console.log(typeof(cage))
console.log(cage)
cage=30
console.log(cage)
const cid=25
console.log(typeof(cid))
console.log(cid)
// cid=30
// console.log(cid)

