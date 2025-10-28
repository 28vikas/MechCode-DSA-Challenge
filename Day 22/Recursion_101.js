// Recursion
// Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller sub-problems.

// Base Condition:
// Every function call in recursion is stored in the call stack. If the recursion is too deep or has no base condition, the call stack keeps growing until memory is exhausted, causing a stack overflow error.
// A base condition is essential in recursion. It stops the recursion when a certain condition is met. Without it, recursion goes infinite and causes a stack overflow. if (num === 0) return;.


// Problem: Print numbers from n to 1 using recursion.

function fun(num) {
  if (num === 0) return;
  console.log(num);
  num = num - 1;
  fun(num);
}

let a = 10;

fun(a);
