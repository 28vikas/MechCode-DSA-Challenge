// What is Time Complexity?
// Time complexity measures how efficient an algorithm is as the input size increases. It’s not the same as the actual time taken to run a program.

// Time Complexity != Execution Time

// Linear vs Binary Search

// #Linear Search
// Best Case: Element at 1st index → 1 operation
// Average Case: Element at n/2 index → n/2 operations
// Worst Case: Element not found → n operations
// Time Complexity: O(n)
// Requirement: Can work on unsorted arrays
// Linear Search Graph


// #Binary Search
// Best Case: Middle element matched → 1 operation
// Average Case: log₂(n) operations
// Worst Case: log₂(n) operations
// Time Complexity: O(log n)
// Requirement: Only works on sorted arrays
// Binary Search Graph
// When we use Linear Search for an input size of 100, it runs 100 times, whereas Binary Search takes only 7 steps. This shows that Binary Search is more efficient. As the input size (n) increases, the way an algorithm behaves helps us understand how efficient it is. Also, the graph helps us understand that Binary Search is more efficient.

// Big O Notation
// It is nothing; just a symbol used to represent the worst-case complexity.

// Code Examples of Time Complexity
// O(1)


// Accessing 5th index element
// int value = arr[5];
// The time complexity is O(1) because we directly access the 5th index without any iteration.

// O(n)


// for(int i = 0; i < n; i++) {
//     // do something
// }