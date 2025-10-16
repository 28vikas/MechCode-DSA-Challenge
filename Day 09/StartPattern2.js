

// output
// 12345;
// 1234;
// 123;
// 12;
// 1;


// let n = 5;

// for(let i = 0; i<n; i++){
//     let pattern = ""

//     for (let j = 0; j<n-i; j++){
//         pattern = pattern + (j+1)
//     }
//     console.log(pattern);
    
// }

// /////////////////////////////////

// output
// *****
// ****
// ***
// **
// *

// let n = 5;

// for(let i = 0; i<n; i++){
//     let pattern = ""

//     for (let j = 0; j<n-i; j++){
//         pattern = pattern + "*"
//     }
//     console.log(pattern);
    
// }




////////////////////////////////////////////////


// output
// ----*
// ---**
// --***
// -****
// *****

// let n = 5;

// for(let i = 0; i<n; i++){
//     let pattern = ""
//     for(let j = 0; j<n-(i+1); j++){
//        pattern = pattern + "-"
//     };
//        for (let k = 0; k < i+1; k++) {
//           pattern = pattern + "*";
        
//        }

//     console.log(pattern);
    
// }




////////////////////////////////
// output
// 1;
// 10;
// 101;
// 1010;
// 10101;

// let n = 5;
// for(let i = 0; i<n; i++){
//     let row = "";
//     let switchNum = 1;
//     for(let j = 0; j<i+1; j++){
//         row = row + switchNum

//         if(switchNum == 1){
//             switchNum = 0;
//         }else{
//             switchNum = 1
//         }
//     }
// console.log(row);

// }



/////////////////////////////

// output
// 1;
// 01;
// 010;
// 1010;
// 10101;


// let switchNum = 1;

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + switchNum;

//     if (switchNum == 1) {
//       switchNum = 0;
//     } else {
//       switchNum = 1;
//     }
//   }
//   console.log(row);
// }