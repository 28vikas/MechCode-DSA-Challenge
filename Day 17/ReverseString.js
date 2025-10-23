




function reverseString(arr) {
  const n = arr.length;
  
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // swap elements
    const temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }

  return arr; 
}

const input = ["h", "e", "l", "l", "o"];
console.log(reverseString(input));


