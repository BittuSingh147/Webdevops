//Syntax in js
//Variables: variables are those where we can store data
//Three types of variables in javascript
//let , var and const
// let name = "Bittu"
// var isStudent = false
// const age = 21

// console.log(name)
// console.log(isStudent)
// console.log(age)

//var
// var isStudent = false;
// console.log(isStudent)
// isStudent = "Bittu"
// isStudent = 10
// console.log(isStudent)

//Let

// let age = 19;
// let canvote = (age > 18)
// console.log(canvote)

//we can also use let like this
let firstname = "Bittu"
console.log(firstname)//Output:Bittu
firstname = "singh"
console.log(firstname)//output:Singh
//but in Const we can't reassigned 


//in const we can't reassigned the value
const name = "Joe"
fname = "Rahul"
console.log(name);//it will give typeerror


// we can also use like this in array
const Student = ["david", "sam", "Dravid"]
console.log(Student[0]);//output:david

//Also we have operators in javascript

// let age = 19;
// let canvote = (age > 18)
// console.log(canvote)//output:true

let a = 1
b = 2
console.log(a + b)//output:3


//function in javascript is basically a helper which you assign some work and function is helping you 

// function greet(name) {
//   return "Hello" + name
// }
// let person = greet("Bittu")
// console.log(person)//output: Hello Bittu

//let's understand from another function

// function sum(a, b) {
//   return a + b
// }
// let newsum = sum("Rahul", 5)
// console.log(newsum);


//let's understand function in another way
// function person(age) {
//   return age > 18
// }
// let canvote = person(19)
// console.log(canvote);


//we can also do this using if else
function canvote(age) {
  if (age > 18) {
    return "He can vote"

  } else {
    return "He can't vote"

  }
}
let sum = canvote(19)
console.log(sum);

//now we came to for loop
//let's suppose i have this program
const subject = ["physics", "Chemsitry", "Maths", "Hindi", "English", "SST"]
let totalsubject = subject.length
// console.log(subject[0])
// console.log(subject[1])
// console.log(subject[2])
// console.log(subject[3])
//we are printing here one by one this is too hectic now i dont want to make this so i make this in loop
// for (let index = 0; index < 4; index++) {
//   const element = subject[index];
//   console.log(element)

// }

for (let index = 0; index < totalsubject; index++) {
  const element = subject[index];
  console.log(element)

}
//it will print the result in loop we dont need to console again and again





//Object is in key and pair value(name:(this is key) and "Bittu"(this is value))
// let person = {
//   name: "Bittu",
//   age: 21,
//   color: "Fair",
//   isstude: "True"


// }
// console.log("name of person is" + person.name)
// console.log("name of person is" + person["name"])//both print same


//writes a function that takes user as a input and greet them with their name and age

// function greet(user) {
//   console.log(`hello ${user.gender} ${user.name} i guess your age is ${user.age} `)
//   if (user.age > 18) {
//     console.log("You can vote");
//   } else {
//     console.log("You're not an adult yet.");
//   }
// }
// let user = {
//   name: "Bittu",
//   age: 21,
//   gender: "Mr"
// }
// greet(user)

function canVote(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      arr2.push(arr[i]); // Pushes eligible males to arr2
    }
  }
  return arr2; // Return the filtered array
}

let people = [
  { name: "Bittu", age: 21, gender: "male" },
  { name: "Rahul", age: 28, gender: "male" },
  { name: "Priya", age: 27, gender: "female" }
];

console.log(canVote(people)); // Test the function
