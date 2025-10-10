Syntax:

function functionName(parameters) {
  // code to execute
  return value; // optional
}

function greet() {
  console.log("Hello! Welcome to Dsa with JavaScript.");
}

greet();

🧠 Problem:1
Write a function that adds two numbers and returns the sum

function addNumbers(a, b) {
  return a + b;
}

// Call the function
let result = addNumbers(5, 3);
console.log("Sum:", result);

🧠Problem:2
Write a function that multiplies two numbers.

function multiply(a, b) {
  return a * b;
}

let product = multiply(4, 6);
console.log("Product:", product);

📝 Problem:3
Write a function that returns the square of a number.

function square(num) {
  return num * num;
}

let result = square(5);
console.log("Square:", result);




🧠 Problem:4
Write a function that checks if a person is eligible to vote or not.

function checkVoteEligibility(age) {
  if (age < 0) {
    console.log("Invalid input");
  } else if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
}

checkVoteEligibility(20);
checkVoteEligibility(15);
checkVoteEligibility(-2);



🧠 Problem:5
Write a function that checks if a given number is even or odd.


✅ Step-by-Step Plan

Take one parameter → num.

Check if num is a valid number.

Use the modulus operator (%) to find the remainder when dividing by 2.

If num % 2 === 0 → even number

Else → odd number




function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
}


checkEvenOdd(10); 
checkEvenOdd(7); 
checkEvenOdd(-3); 