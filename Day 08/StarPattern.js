

// ****
// ****
// ****
// ****

let n = 4
for(let i = 0; i<n; i++){
       let row = ""
    for(let j = 0; j<n; j++){
       row = row + "*"
    }
    console.log(row)
}



///////////////////////////////////////////////////////

// *
// **
// ***
// ****
let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j<i+1; j++) {
    row = row + "*";
  }
  console.log(row);
}


// Note : j<i+1 and j<=i both are somethings

// ///////////////////////////////////////////

// 1;
// 12;
// 123;
// 1234;
// 12345;

let n = 5;

for(let i = 0; i<n; i++){
    let row = ""
    for(let j = 0; j<i+1; j++){
        row = row + (j+1)
    }

    console.log(row);
    
}


//////////////////////////////////////////////////////////

// 0
// 1 1
// 2 2 2
// 3 3 3 3
// 4 4 4 4 4


// let n = 5; 

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern += i + " ";
  }
  console.log(pattern);
}