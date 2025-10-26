




//Time Complexity: O(n log n)

// let missingNumber = function(nums){

//   nums.sort((a, b) => a - b); // O(n log n)

//   for (let i = 0; i < nums.length; i++) {  //O(n);
//     if (nums[i] != i) {
//       return i;
//     }
//   }
//   return nums.length;
// }

// let result = missingNumber([3, 0, 1]);
// console.log(result);




////////////////////////////////////////////////////

// Time Complexity:
// Time: O(n);

let missingNumber = function(nums){

     let n = nums.length;
     let expectedSum = (n * (n + 1)) / 2;
     let actualSum = 0;

     for(let i = 0; i<nums.length; i++){
         actualSum = actualSum + nums[i]
         
     }
    
     return expectedSum - actualSum;

}

let result = missingNumber([0, 1]);
console.log(result);