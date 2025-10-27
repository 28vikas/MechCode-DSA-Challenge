



/////  Using HashMap

///// O(n) time

// let singleNumber = function(nums){
//     let hash = {}
//     for(let i = 0; i<nums.length; i++){
//        if(!hash[nums[i]]){
//          hash[nums[i]] = 1
//        }else{
//         hash[nums[i]]++
//        }
//         for(let i = 0; i<nums.length; i++){
//             if(hash[nums[i]] == 1){
//                 return nums[i]
//             }
//         }   
//     }
// }

// let result = singleNumber([4,1,2,1,2])
// console.log(result);



////////////////Sorting and comparing neighbors ///////////////

//O(n log n)


// let singleNumber = function (nums) {
  
//     nums.sort((a,b)=> a - b)

//     for(let i = 0; i<nums.length-1; i += 2){
//         if(nums[i] !== nums[i+1]){
//           return nums[i]
//         }
//     }
//       return nums[nums.length - 1];
// };

// let result = singleNumber([4, 1, 2, 1, 2]);
// console.log(result);




///////////////  bitwise xor ////////////////////

/////// O(n)

let singleNumber = function (nums) {
  
let xor = 0;

 for(let i = 0; i<nums.length; i++){
  xor = xor ^ nums[i];
 }

 return xor

};

let result = singleNumber([4, 1, 2, 1, 2]);
console.log(result);




