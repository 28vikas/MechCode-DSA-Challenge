// # O(log n)
// e.g., Binary Search

// int binarySearch(int arr[], int n, int key) {
//     int low = 0, high = n - 1;
//     while(low <= high) {
//         int mid = (low + high) / 2;
//         if(arr[mid] == key) return mid;
//         else if(arr[mid] < key) low = mid + 1;
//         else high = mid - 1;
//     }
//     return -1;
// }



//# O(n^2) – Nested Loop


// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < n; j++) {
//         // do something
//     }
// }



// # O(n log n)


// for(int i = 0; i < n; i++) {
//     int temp = n;
//     while(temp > 1) {
//         temp = temp / 2;
//         // do something
//     }
// }


// # O(n^3) – Triple Nested Loops


// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < n; j++) {
//         for(int k = 0; k < n; k++) {
//             // do something
//         }
//     }
// }


// # O(2^n)


// Recursive Fibonacci

// int fib(int n) {
//     if(n <= 1) return n;
//     return fib(n-1) + fib(n-2);
// }


//# O(n!)


//# Permutation generator

// void permute(string s, int l, int r) {
//     if(l == r) {
//         cout << s << endl;
//     } else {
//         for(int i = l; i <= r; i++) {
//             swap(s[l], s[i]);
//             permute(s, l + 1, r);
//             swap(s[l], s[i]); // backtrack
//         }
//     }
// }


// #Time Complexity Priorities

// O(1) – Constant time
// O(log n) – e.g., Binary Search
// O(n) – e.g., Linear Search
// O(n log n) – e.g., Merge Sort
// O(n^2) – e.g., Nested Loops
// O(n^3) – e.g., Triple Nested Loops
// O(2^n) – Recursion (e.g., Fibonacci)
// O(n!) – e.g., Brute-force permutations

// #Time Complexity Full Comparison Graph

// What is Space Complexity?
// Space complexity refers to how much extra memory an algorithm uses.

// Examples:
// Access 5th element: O(1)
// Find max with variable: O(1)
// New array: O(n)
// 2D Matrix: O(n^2)