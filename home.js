// console.log("Hello");
// alert("Hello This is Rohit");


// inline coment
/* multiline
comment*/


// Variables
/*var b = "smoothie";
console.log(b);*/

/*var somenumber = 45;
console.log(somenumber);*/


// Change HTML text using JavaScript
// document.getElementById("sometext").innerHTML="JavaScripts is Awesome";


// Asking user Age from Prompt and Storing that data
/*var age = prompt("Your What is Your Age ?");

document.getElementById("sometext").innerHTML=age;*/


//Numbers in JavaScript
/*var num1 = 5.7; // delaring a number
num1 = num1 + 1;
console.log(num1);*/

// Fancy Way to increment/ decrement a number n++ incrementea a number by 1
/*var num1 = 10;
num1++;
num1++;
console.log(num1)*/

/*var num1 = 10;
num1--;
num1--;
console.log(num1)*/

// Arithematic operations 
/*console.log(5 * 10);
console.log(10 / 2);*/


//Divide /, multiple *, remainder %, exponent **
/* num1 = 10
console.log(num1 % 5)
console.log(num1 ** 3) */

// Increment or Decrement any number by 10
/* num1 = 10;
num1 += 10;
console.log(num1); */

// Functions
function fun(){
    alert("This is a function.");
}
//fun();

/* Function that takes in a name and returns to you 
Hello Folllowed by your Name.

For example

Name: "Rohit"
Return: "Hello Rohit"*/
function greeting(){
    var name = prompt("What is your Name");
    var result = "Hello "+name;
    console.log(result);
}

//greeting();


// Function that takes in Parameters/ Arguments
function sumNumbers(num1=0, num2=0){
    var sum = num1 + num2;
    console.log(sum)
}

//sumNumbers(10, 15);


function greeting2(name){
    var result = "Hello "+name;
    console.log(result);
}

//var Name = prompt("What is your Name");
//greeting2(Name);


//Loops
/*
1. While loops
2. For loops
*/

let num = 0;
//1. While loop
/*while (num < 100){
    num += 1;
    console.log(num);
}*/

//2. For loop
/*for (let num = 0; num <= 100; num++){
    console.log(num)
}*/


// Data Types
let Age = 19;  //Number
let Name = "Rohit";  //String
let Names = {first: 'Jane', last: "Doe"}; // Object
let truth = false; //(true/ false)   // Boolean
let groceries = ["apple", "banana", "oranges"];  //Array or array
let random;  //undefined
let nothing = null; //value null


//Strings in Javascript (commom methods)
let fruit = "banana";
let fruits = "banana,apple,orange,watermelon";
let moreFruits = "banana\napple";

//console.log(fruit);
//console.log(moreFruits);
//console.log(fruit.length);  //Returns the length of the string

//console.log(fruit.indexOf("na"));  // Returns the index of the passed character in the string
//console.log(fruit.indexOf("q")); // Returns -1 if passed character is not found

// console.log(fruit.slice(2, 6)); // String slicing
// console.log(fruit.replace("ban", 123)); //Replacing character in a string

// console.log(fruit.toUpperCase()); //Converts the string to uppercase
// console.log(fruit.toLowerCase()); //Converts the string to lowercase

// console.log(fruit.charAt(2)); //Getting character from the string using the index
// console.log(fruit[2]); // simpler method of getting the character by the index

// console.log(fruit.split(""));  //same as split method in python
// console.log(fruits.split(",")); //splitting the string by comma


// Array's
let fruitsArray = ['banana', 'apple', 'orange', 'watermelon', 'pineapples'];
// let fruitsArray = new Array('banana', 'apple', 'orange', 'watermelon', 'pineapples');

// console.log(fruitsArray[1]);

// fruitsArray[0] = "pear"; // values in array can be changed using index as in python
// console.log(fruitsArray);

//traversing through array using for loop
/*for (let i = 0; i < fruitsArray.length; i++){
    console.log(fruitsArray[i])
}*/

//traversing through array using while loop
/*let len=0
while (len < fruitsArray.length){
    console.log(fruitsArray[len])
    len += 1
}*/


// Array common Methods
// console.log("to string", fruitsArray.toString()); // joining each element of the array seperataed by commas
// console.log(fruitsArray.join("*")); // joins each element of the array by specified character
// console.log(fruitsArray.pop()), fruitsArray; //python stack operations in Javascript
                                                          // pop removes the last element in the array
// console.log(fruitsArray.push("blackberries"), fruitsArray) //appends the item to the array

// console.log(fruitsArray[fruitsArray.length]="melon", fruitsArray);

// console.log(fruitsArray.shift(), fruitsArray);  // removes first element from the array
// console.log(fruitsArray.unshift("kiwi"), fruitsArray); // add new element to the start of the array

let vegetables = ["cabbage","tomato","onion","carrot"];
let allGroceries = fruitsArray.concat(vegetables); // concatning two arrays
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4));

// console.log(allGroceries.reverse()); //reverses the array
// console.log(allGroceries.sort()); // sorting the groceries by alphabetical order


let somenumbers = [5,10,25,2,30,2,6,100,75,42,68,121,141];
// console.log(somenumbers.sort(function(a, b) {return a-b}))  //ascending order
// console.log(somenumbers.sort(function(a, b) {return b-a}))  //descendng order


// Adding data to an empty array
let emptyArray = new Array();
for (let num=0; num <= 10; num++){
    emptyArray.push(num);
}
// console.log(emptyArray)


// Objects in Javascript
// Dictionaries in Python

let student = {first:"Rohit", second:"Dipanshu", age:17, height:155,
studentInfo: function(){
    return this.first + "\n" +this.second + "\n" + this.age;
}};
// studentInfo is a part of OOP in Javascript
// self in python = this in Javascript


// console.log(student)
// console.log(student.first)

// student.second = "Aryan" //changing value in object by using key
// console.log(student)

// student.age++; // incermenting age in the object declared above
// console.log(student);

// console.log(student.studentInfo());


//Conditional statements (if/ else) Statements
// &&->and, ||->or
/*var age = prompt("what is yout age ??")
if ((age >= 18 ) && (age <=35)){
    status = "target demo";
    console.log(status);
}
else {
    status = "not my target";
    console.log(status);
}*/


//Switch Statements
//differentiate beteween weekday vs. weekend
switch(0){ // here case = if statement in python and default = else statement
    case 0:
        text = "Weekend";
        break;
    case 5:
        text = "Weekend";
        break;
    case 6:
        text = "Weekend";
        break;
    default:
        text = "Weekday"
}

// console.log(text);