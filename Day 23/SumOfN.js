


// Problem Statement:
// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

// Example:
// Input: 5

// Process: 5 + 4 + 3 + 2 + 1 = 15

// Output: 15

// Concepts:
// Recursion: A technique where a function calls itself with a reduced subproblem.
// Base Case: Stops recursion to prevent infinite calls. Here, if n === 0, return 0.
// Recursive Case: Return n + sum(n - 1).



// Time & Space Complexity:
// Time Complexity: O(n) one call per value from n to 0.


function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}


let result = sum((5))

console.log(result); 
