// variables constants and comments
// var name = "aqib";
// var name = "javed";
// console.log(name);
// // we can redeclare a variable initializes with var so we don't use var.
// //var is also hoisted means it can be used before initilization.
// let point = 13;
// point = 15;
// console.log(point);
// //when a variable is already declared.Redeclaration raises syntax error.
// //const variable can not be declared. it is always defined with a value that can'nt be changed latter.
// const PI = 3.1416;
// console.log(PI);

// Data types of values
// Number --> exp: 1,  2, 3 , 3.14
// string --> "This is string"
// boolean -->true/false
// null   --> shows internshional absense of any object value
// let points=null;
// points=13;
// console.log(points);
// undefined  -->variables declared but not initialized.
// let points;
// points=14;
// console.log(points);
// objects --> complex data type used to store values in key:value pairs in curly braces.
  
                                // JavaScript Array start
                
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const vegetables = ["Tomato", "onion", "ladyfinger"];
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(fruits.toString()); //Returns a string representation of an array.
// console.log(fruits.join("-")); //The join() method also joins all array elements into a string. but in addition you can specify the separator:
// console.log(fruits.pop()); //The pop() method removes the last element from an array.this method returns the value that was "popped out":
// console.log(fruits.push("Lemon")); //The push() method adds a new element to an array (at the end):returns the new array length.
// console.log(fruits.shift()); //The shift() method removes the first array element and "shifts" all other elements to a lower index.it return value that is removed.
// console.log(fruits.unshift("Banana")); //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(fruits.concat(vegetables));
// console.log(myArr.flat()); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items
*/
// console.log(fruits.sort()); //The sort() method sorts an array alphabetically:
// console.log(fruits.reverse()); //The reverse() method reverses the elements in an array.
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a,b)=> a-b)); //acending sort
// console.log(points.sort((a,b)=> b-a)); //decending sort
// console.log(Math.max.apply(null,points)); //to find maximum value in array
                     // Array Iteration Method
 //The forEach() method calls a function (a callback function) once for each array element.

 //The map() method creates a new array by performing a function on each array element.
 //The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

// const numbers = [45, 4, 9, 16, 25];
// console.log( numbers.map((value)=>value*2));   

//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
//  console.log(numbers.flatMap((value)=>value*2));  

//The filter() method creates a new array with array elements that pass a test.
//  console.log(numbers.filter((value)=>value > 40));

//  The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// console.log(numbers.reduce((prev,current)=>prev+current));

//The every() method checks if all array values pass a test.
// console.log(numbers.every(value=>value > 18));

//The some() method checks if some array values pass a test.
// console.log(numbers.some(value=>value > 18));

//The indexOf() method searches an array for an element value and returns its position.
//returns -1 if the item is not found.
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.indexOf("Orange"));

//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// console.log(fruits.lastIndexOf("Mango"));

//he find() method returns the value of the first array element that passes a test function.
// const numbers = [45, 4, 9, 16, 25];
// console.log(numbers.find((item)=>item > 4));

//The findIndex() method returns the index of the first array element that passes a test function.
// console.log(numbers.findIndex(item=>item > 18));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// The Array.keys() method returns an Array Iterator object with the keys of an array.
// let keys=fruits.keys();
// for(let x of keys){
//     console.log(x);
// }
//The entries() method returns an Array Iterator object with key/value pairs:
// const entries = fruits.entries();

// for (let x of entries) {
//  console.log(x);
// }

//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// console.log(fruits.includes("Mango"));

//The ... operator expands an iterable (like an array) into more elements:
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];

// Array const
// It has become a common practice to declare arrays using const
// An array declared with const cannot be reassigned:

// Example
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
/*
Arrays are Not Constants
The keyword const is a little misleading.

It does NOT define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.

*/
//Const Block Scope
// An array declared with const has Block Scope.
// An array declared in a block is not the same as an array declared outside the block:
/*
Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:

Example
const cars = ["Volvo", "BMW"];   // Allowed
const cars = ["Volvo", "BMW"];   // Not allowed
var cars = ["Volvo", "BMW"];     // Not allowed
cars = ["Volvo", "BMW"];         // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"];   // Not allowed
  cars = ["Volvo", "BMW"];       // Not allowed
}
*/

                    //    <**** Array End ***>     //

//                      <*******String Start******>      //

// JavaScript strings are for storing and manipulating text.

// A JavaScript string is zero or more characters written inside quotes.

// Example
// let text = "John Doe";
// console.log(text);

//String Length
// To find the length of a string, use the built-in length property:
// console.log(text.length);
//Always create strings with string literals.
//Comparing two JavaScript objects always returns false.

//Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// 1) slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// let text = "Apple, Banana, Kiwi";
// console.log(text.slice(3,10));

// // if you omit the second parameter, the method will slice out the rest of the string:
// console.log(text.slice(3));

// // If a parameter is negative, the position is counted from the end of the string:
// console.log(text.slice(-10));

//2) substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// console.log(text.substring(7,13));

// The replace() method replaces a specified value with another value in a string:
// let text = "Please visit Microsoft!";
// console.log(text.replace("visit","go to"));

let text = "Please visit Microsoft and Microsoft!";
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. 
console.log(text.replaceAll("Microsoft","Facebook"));
console.log(text.toLowerCase());