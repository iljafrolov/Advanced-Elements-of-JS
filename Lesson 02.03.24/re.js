// Computational complexity


// One problem can have many ways of solving it.
// Some of these ways are faster than other solutions.
// To compare their efficiency we use the computational complexity.
// It is not about time or memory directly.
// It is about counting the iterations of a program with respect to the input data size.

// Big-O notation.
// How many operations we need to perform a certain task with a certain algorithmic solution?
// We count the iterations of the algorithm’s main loop(s).
// Then we check how the operations number grows with the growth of the data.
// Big-O reflects the order of magnitude, not the exact value.

// O(1) - we need one operation exactly (no matter the data size).
// O(logn) - for the data size of n, we need log(n).
// O(n) - for the data size of n, wee need n operations. The operations count grows proportionally to the data size growth.
// O(nlogn), O(n2), O(n!) - sometimes operations count grows faster than data length.

// O(1) - we need 1 operation to access an element in an array.
// O(logn) - binary search involves log(n) operations.
// O(n) - to input n separate values we need n operations.
// O(nlogn) - sorting: heap sort, merge sort, quick sort (not always!).
// O(n2) - sorting: bubble sort, insertion sort.

//Example for acces an element in array

// const array = [1,2,3,4,5,6,7,8]
// const firstElement = array[0]  //O(1)

// //Example finding max element in an array

// function findMax(array){
//     let max = array[0]; //O(n)
//     for (let i=1; i < array.lengh; i++){ //O(n)
//         if (array[i] > max) {
//             max = array[1]
//         }
//     }
//     return max //O(1)
// }

// function bubbleSort(array){ //0(n2)
//     const n = array.lengh;
//     for(let i=0; i < n; i++){
//         for(let j=0; j < n-i-1;j++){
//             //do something
//         }
//     }
// }

// function binarySearch(array, value){ //O(logn)
//     let low = 0;
//     let high = array.lengh - 1;
//     while (low <= high){
//         const mid = Math.floor((low + high)/ 2)
//         if (array[mid] === value){
//             return mid;
//         }else if(array[mid]< value){
//             low = mid +1;
//         }else{
//             high = mid -1;
//         }
//     }

//     return -1
// }




//DOM

// DOM, Document Object Model is a way for browsers to see HTML documents.
// A HTML file contains some text, organized with tags.
// The browser reads them and builds a structure of objects in its memory.

// Why do we need DOM
// The browser builds a tree of objects from HTML elements.
// It can be compared to a family tree, with parents, children, siblings etc.
// Each HTML element has a relevant node on the DOM tree.
