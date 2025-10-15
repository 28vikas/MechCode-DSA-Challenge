

// for(let i = 0; i<5; i++){
    
//     for(let j = 0; j<5; j++){
//         console.log("i =" + i + " j = " + j);
        
//     }
// }



// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log("i =" + i + " j = " + j);
//   }
// }



// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j<=i; j++) {
//     console.log("i =" + i + " j = " + j);
//   }
// }


// for (let i = 0; i < 3; i++) {
//   for (let j = i; j>0; j--) {
//     console.log("i =" + i + " j = " + j);
//   }
// }



// Question 1:Write a nested for loop that prints all pairs of i and j where both go from 0 to 4.

for(let i = 0; i<5; i++){
    
    for(let j = 0; j<5; j++){
        console.log("i =" + i + " j = " + j);
        
    }
}


//Question 2: Write a nested for loop where the inner loop runs from 0 to i - 1. Print the values of i and j.

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i =" + i + " j = " + j);
  }
}

//Question 3: Write a nested for loop where the inner loop runs from 0 to i (inclusive). Print the values of i and j.

for (let i = 0; i < 3; i++) {
  for (let j = 0; j<=i; j++) {
    console.log("i =" + i + " j = " + j);
  }
}

//Question 4: Write a nested for loop where the inner loop starts from i and decrements down to 1. Print the values

for (let i = 0; i < 3; i++) {
  for (let j = i; j>0; j--) {
    console.log("i =" + i + " j = " + j);
  }
}



//Question 5: Write a nested for loop where the outer loop counts down from 5 to 1, and the inner loop runs from 0 to i - 1. Print the values of i and j.

for (let i = 5; i > 0; i--) {
  for (let j = 0; j<i; j++) {
    console.log("i =" + i + " j = " + j);
  }
}