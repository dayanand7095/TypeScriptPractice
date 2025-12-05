//type/Datatypes
//annotations - process of explicitly applying datatype to the variable by using colon or including colon
//type inference - if we don't assign data type at compile time, at run time type script assign the data type at
//runtime 
//in Typescript there are two types of datatypes
//1. Primitive types - number, string, boolean, null, void, any, undefined, union type, bigint, symbol -->which 
// will allow single value to be stored
//2. non primitive types - Array, class, function, interface, tuple --> which will allow mulitple to be stored

// primitive types
// Number Type - represents both integers and floating-point numbers
let age=30;
let value=27.543
let big=888897712980831098
console.log("age:",age)
console.log("value:",value)
console.log("big:",big)
console.log(typeof age)
console.log(typeof value)
console.log(typeof(big))
//String type - group of character or text, 3 ways " " ' ' `` - backtick is mainly used for pass some data to the 
// string
let fname:string="john"
let lname:string='kenedy'
let fullname:string=`Hello ${fname} ${lname}`
console.log(fullname)

//Boolean - stores only true or false values
let isStudent:boolean=true;
let hasJob:boolean=false;
console.log('isStudent', isStudent)
console.log("hasJob", hasJob)

//Null and undefined 
let ename:null=null
let emptyvalue:undefined=undefined
console.log(typeof ename)
console.log(typeof emptyvalue)
let snames:string;
console.log(typeof snames)
console.log(snames)

//Any - this will volatile the rule of type saftey, we should use it carefully and this is superset of all types
// where we can store anytime of values, this will help us to follow dynamically typed langage rule
let aname:any;
console.log(typeof aname)
aname=10;
console.log(typeof aname)

//UNIONTYPE - this is not a keyword, suppose if there is any id value which should take only needed types
// then we can use uniontype
let id:String | boolean | number;
id=44;
console.log(id)
id="suresh"
console.log(id)

//void - mainly used for functions, below is the syntax

function sum():number{
//console.log("welcome")
    return 25
}
console.log(sum());