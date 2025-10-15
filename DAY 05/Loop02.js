// write a function that searches for an Element in an array and return the index, if the Element is not present then just return -1


function searchElement (num,x){

    for(let i = 0; i<num.length; i++){
        if(num[i] === x){
            return i;
            
        }
    }
return -1

}



let arrr = [5,2,64,8,9,3]


let resultt = searchElement(arr,0)

console.log(resultt);




function negativeNumber(num){
    let negNum = []
for(let i = 0; i<num.length; i++){
    if(num[i]<0){
        negNum.push(num[i])
    }
}   

return negNum
}


let arr = [2,3,-8,5,-3]

let result = negativeNumber(arr)


console.log(result);



function negativeNumber(num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      count++
    }
  }

  return count;
}

let arr1 = [2, 3, -8, 5, -3,-1, -10];

let result1 = negativeNumber(arr);

console.log(result1);



// write a function that returns the largest number in array



function findLargestNumber(num) {
  let largestNum = -infinity;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largestNum) {
      largestNum = num[i]
    }
  }

  return largestNum;

}

let arr2 = [2,5,69,266,256,123,86];

let result2 = findLargestNumber(arr);

console.log(result2);

// write a function that returns the smallest number in array


function findSmallestNumber(num) {
  let smallestNum = Infinity;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < smallestNum) {
      smallestNum = num[i];
    }
  }

  return smallestNum;
}

let arr3 = [2, 5, 69, 266, -23, 123, 86];

let result3 = findSmallestNumber(arr);

console.log(result3);





