//variables constants and comments
// var name = "aqib";
// console.log(name);
/*
problem with var
variables declared with var can be redeclared with same name and reassigned values
*/
// let score = null;
// console.log(typeof score);
//Points*
// typeof null variable is Object
// typeof undefined variable is undefined
// when variables are declared their type is by default undefined.
// if I try to redeclare variable with same name with different types its shows error.

//Data types in JS

//1. Numbers 1-2-3-4
//2. string "this is string"
//3. boolean true/false
//4. null intensionally absence of value
//5. array
//6. object

//end

//string start//
// console.log("hello world");
// let firstname = "Aqib";
// let lastname = "javed";
// console.log(firstname, lastname); //console.log() put some space automatically
// console.log(firstname + " " + lastname);
// console.log(`${firstname} ${lastname}`);
// //string methods
// let hobbies = "  football cricket hockey   ";
// let trim = hobbies.trim(); //trim removes any leading and trailling spaces
// let hobbies = "football cricket hockey";
// let indexOf = hobbies.indexOf("cricket"); //indexOf return first index of any string
// let lastIndexOf = hobbies.lastIndexOf("cricket"); //return last index of any string.
// let includes = hobbies.includes("cricket"); // includes check whether a string is present or not return answer in true/false.
// let slice = hobbies.slice(0,8);
// let split = hobbies.split(" ");
// console.log(split);

//                        Numbers Methods                       //

// let score = 20;
// let divide = score / 2; //gives Quottient
// let modulus = score % 2; //give modules
// console.log(modulus);
//Mathematical Expression
// 1 ()
// 2 ** power operator
// 3 * / % (from left to right)
// 4 + - (from left to right)

//Type convertion
// let result="Total Score :"+score
// console.log(result);
// loose == vs Strict === equality operator
// let number=20
// console.log(number=="20"); // return true check only value and automaticatically type coercion from one type to another type.

// let age=20;
// let stringOfAge=String(age)
// let booleanOfAge=Boolean(age)
// console.log("Age " + booleanOfAge);

//                                          Arrays                                  //
const summerMonths=["april","may","june","july","august","september"]
const winterMonths=["january","february","march","october","november","december"]
console.log(winterMonths.concat(summerMonths)); //gives combination of both arrays.
console.log(summerMonths.push("October")); //Appends new elements to the end of an array, and returns the new length of the array.
console.log(summerMonths);
console.log(summerMonths.pop()); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(summerMonths);

 