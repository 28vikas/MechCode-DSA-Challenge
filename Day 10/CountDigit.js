



function countDigit(num){
   let count = 0
    while(num>0){
        num = Math.floor(num/10)
        count++
    }

    return count

}


let digit = 289;

let result = countDigit(digit);

console.log(result);



/////////////////////////////////////


// for corner case like zero and negative number




// function countDigit2(num) {
//   if (num === 0) return 1;

//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return count;
// }

// let n = 0;

// let result3 = countDigit2(n);

// console.log(result3);



// function countDigit3(num) {

//     if(num === 0) return 1

//     num = Math.abs(num)
//   let count = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return count;
// }

// let n = -289;

// let result3 = countDigit3(n);

// console.log(result3);
