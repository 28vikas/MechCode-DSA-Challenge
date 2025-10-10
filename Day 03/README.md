🧠 JavaScript Functions & If-Else Practice
🚀 Overview

Welcome to my JavaScript DSA Practice Repository!
This section focuses on learning and implementing functions and conditional statements (if, else) in JavaScript.

Each problem helped me strengthen my understanding of:

Function definitions

Parameters & return values

Logical conditions

Input validation

Real-world decision-making in code

📚 Topics Covered

✅ Defining and calling functions

✅ Using parameters and return statements

✅ Working with if, else if, and else conditions

✅ Basic problem-solving and debugging

💻 Practice Problems & Solutions

🟩 1. Greeting Function
function greet() {
  console.log("Hello! Welcome to DSA with JavaScript.");
}


Output:

Hello! Welcome to DSA with JavaScript.

🟦 2. Add Two Numbers
function addNumbers(a, b) {
  return a + b;
}

console.log("Sum:", addNumbers(5, 3));


Output:

Sum: 8

🟨 3. Multiply Two Numbers
function multiply(a, b) {
  return a * b;
}

console.log("Product:", multiply(4, 6));


Output:

Product: 24

🟪 4. Square of a Number
function square(num) {
  return num * num;
}

console.log("Square:", square(5));


Output:

Square: 25

🟥 5. Check Vote Eligibility
function checkVoteEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
}


Example Calls:

checkVoteEligibility(20);   
checkVoteEligibility(15);    


🟧 6. Check Even or Odd
function checkEvenOdd(num) {
 if (num % 2 === 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
}


Example Calls:

checkEvenOdd(10);    // 10 is Even.
checkEvenOdd(7);     // 7 is Odd.