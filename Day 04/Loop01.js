
// ==============================
// 🧠 Problem 1: Print "Hello MechCode" 10 times using for loop
// ==============================
for (let i = 1; i <= 10; i++) {
  console.log("Hello MechCode " + i);
}

// ==============================
// 🧠 Problem 2: Print even numbers between 2 and 8
// ==============================
for (let i = 2; i < 9; i = i + 2) {
  console.log("Even number:", i);
}

// ==============================
// 🧠 Problem 3: Print numbers from 5 down to 1
// ==============================
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// ==============================
// 🧠 Problem 4: Demonstrate loop with false condition (no output)
// ==============================
for (let i = 5; i < 4; i++) {
  console.log("This will not run");
}

// ==============================
// 🧠 Problem 5: Call a function inside a loop
// ==============================
function greet() {
  console.log("MechCode");
}

for (let i = 0; i < 10; i++) {
  greet();
}

// ==============================
// 🧠 Problem 6: Loop through an array and print all elements
// ==============================
let arr1 = [10, 7, 6, 9, 2, 8];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// ==============================
// 🧠 Problem 7: Print only even numbers from an array
// ==============================
let arr2 = [10, 7, 6, 3, 2, 8];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    console.log("Even number in array:", arr2[i]);
  }
}

// ==============================
// 🧠 Problem 8: Print "Hello" 5 times using while loop
// ==============================
let i = 0;
while (i < 5) {
  console.log("Hello");
  i++;
}
