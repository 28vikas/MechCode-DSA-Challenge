

// problem : find the second Largest Number in Array

function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least 2 elements";
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? "No second largest element" : second;
}

const arr = [10, 5, 20, 8, 20];
console.log(secondLargest(arr)); // Output: 10