
// Alternative: |

// Pattern: /st|in/ (st or in).
// Search string: test string.
// Will find: st (in test ), another st (in string ), in.

// pattern =  /st|in/ 
// console.log(pattern.test("This is a ring"))

// Alternative: |

// Pattern /[a-z]{4}|\d{3}/ (four letters or 3 digits).
// Search string: Test string333.
// Will find: stri and 333.

// pattern = /[a-z]{4}|\d{3}/g
// match = "Test string333".match(pattern)
// console.log(match)



// NESTED RULES


// We use parentheses to define subpatterns or nested rules inside a pattern.
// Thus, we specify the sequence of interpreting the RegExp pattern.
// It is similar to mathematical operations.

// /c(at|ar)/ - will find both cat and car.
// /([A-Z]{2})([0-9]{4,6})/ - it will fill and find a postal code (two letters for country, 4 to 6 digits for address code).


// DATA STRUCTURES


// A data structure is a specialised form of organizing, processing and retrieving data.
// Different data structures are designed for different purposes.
// Data organized in structures are prepared to be accessed by algorithms.

// Array
// Arrays are linear data structures.
// Elements are linked one after another.
// Each element has its own position, called an index.
// In a computer’s memory, the whole array is typically stored under one address.
// push data into an Array
// pop/delete

let fruits = ["apples", "Banana", "Orange"]
fruits.push("grapes")
console.log(fruits)

// Array:
// Define an array containing numbers from 1 to 5.
// Access the first element of the array.
// Add the number 6 to the end of the array.
// Remove the last element of the array.

let numbers = ["1","2","3","4","5"]
console.log(numbers[0])
numbers.push("6")
console.log(numbers)
numbers.pop(numbers)
console.log(numbers)


// List
// A data structure with elements linked one after another.
// Contrary to an array, the list is not stored under one address.
// Instead, each element of the list contains address of the next element (singly linked list).
// This allows to iterate over the list, from the first element, through the next ones, to the last one.
// The list element can also have information about the previous element (a double linked list).

// Stack
// A stack is a data structure, where we append or remove elements only from one side. We call it LIFO (Last In - First Out).

// Real-life representation: stack of newspapers.

// We can put one newspaper on top of the stack.
// We can take one newspaper from the top.
// In programming we call it pushing and popping.

// class Stack {
//     constructor() {
//         this.stack = []
//     }
//     push(string) {
//         this.stack.push(string)
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         } else {
//             return this.stack.pop()
//         }
//     }
//     isEmpty() {
//         return this.stack.length === 0
//     }

//     size() {
//         return this.stack.length
//     }
// }

// const stack = new Stack()

// stack.push("John")
// stack.push("Jane")

// console.log(stack.pop())
// console.log(stack)

// Implement a stack of people's names in JavaScript. Make it a class, that allows us to put items on top of the stack. 
// It should also allow us to remove and return items from the top of the stack.
// A single item should be an object, consisting of a name and surname. Items can be stored inside the stack in an array.

// class NameStack {
//     constructor() {
//         this.stack = []
//     }
//     push(name, surname) {
//         this.stack.push({name:name,surname:surname})
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         } else {
//             return this.stack.pop()
//         }
//     }
//     isEmpty() {
//         return this.stack.length === 0
//     }

//     size() {
//         return this.stack.length
//     }
// }

// const ns = new NameStack()

// ns.push("John", "Doe")
// ns.push("Jane", "Doe")

// console.log(ns)

// Stack:
// Create an empty stack.
// Push the numbers 10, 20, and 30 onto the stack.
// Pop an element from the stack.

// class NumberStack {
//     constructor() {
//         this.stack = []
//     }
//     push(number) {
//         this.stack.push(number)
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         } else {
//             return this.stack.pop()
//         }
//     }
//     isEmpty() {
//         return this.stack.length === 0
//     }

//     size() {
//         return this.stack.length
//     }
// }

// const ns = new NumberStack()

// ns.push("10")
// ns.push("20")
// ns.push("30")

// console.log(ns)

// ns.pop()
// console.log(ns)



// Queue
// A queue is a data structure, where we append elements on one side and remove from the other side. We call it FIFO (First In - First Out).

// Real-life representation: shopping queue.

// New people join the queue at its end.
// People are being served at its beginning.

// Queue Exercise
// Make a queue of objects, representing cars (for example queuing for some service).
// Each car should have a brand, a model, a registration number.
// A queue should also be a class, with methods to add a car to the end of the queue and to take one from its beginning.

// class Car{
//     constructor(brand,model,number){
//         this.brand = brand
//         this.model = model
//         this.number = number
//     }
// }


// class Queue{
    
//     //constructor for Queue
//     constructor() {
//         //initializes an empty queue with zero elements
//         this.items = [];
//         this.count = 0;
//     }

//     //adding an element to the end of the queue
//     push(item) {
//         this.items.push(item);
//         this.count = this.count + 1;
//     }

//     //removing and returning an element from the beginning
//     pop() {
//     if(this.count > 0) {
//       this.count = this.count - 1;
//     }

//     return this.items.shift();
//     }

//     //viewing an element at the beginning
//     view() {
//     return this.items[0];
//     }
    
// }

// var car1 = new Car("Nissan","2021",111)
// var car2 = new Car("Ford","2023",112)
// var car3 = new Car("Kia","2022",113)

// var q = new Queue()

// q.push(car1)
// q.push(car2)
// q.push(car3)
// console.log(q.pop())


// Queue:
// Create an empty queue.
// Enqueue the letters "a", "b", and "c" into the queue.
// Dequeue an element from the queue.

// class Queue {
//         constructor() {
//             this.queue = []
//         }
//         push(string) {
//             this.queue.push(string)
//         }
//         pop() {
//             if (this.isEmpty()) {
//                 return "Queue is empty"
//             } else {
//                 return this.queue.shift()
//             }
//         }
//         isEmpty() {
//             return this.queue.length === 0
//         }
    
//         size() {
//             return this.queue.length
//         }
//     }

//     const ns = new Queue()

//     ns.push("a")
//     ns.push("b")
//     ns.push("c")
    
//     console.log(ns)
    
//     ns.pop()
//     console.log(ns)
    

// Tree
// A tree is a Non-linear data structure.
// A tree consists of single items, called nodes.
// Each node contains the value of its element and the references to other nodes.
// No reference is duplicated and none of them points back to the tree root.
// We refer to the nodes as “parents” and “children”, like in a family tree.

// Object:
// Define an object representing a person with properties: name, age, and city.
// Access the name property of the person object.
// Modify the age property of the person object.

class Person{
        constructor(name, age, city){
            this.name = name
            this.age = age
            this.city = city
        }
    }

// ALGORITHMS
// What is an algorithm?

// A defined way to solve a problem in a finite number of steps.
// A process or set of rules to do a certain thing and obtain an expected result.
// How to build an algorithm?
// Describe your problem.
// Figure out a possible solution.
// Draw a block diagram of the solution.
// Implement the solution in a programming language.
// How to describe an algorithm
// Define the constraints of your expected solution.
// Define the input of your algorithm.
// Define the output of your algorithm.


// Sorting algorithms
// Sorting is one of the typical algorithmic tasks.
// Input: array of randomly placed elements.
// After sorting, they must be put in order.
// Sorting algorithms
// As in many other problems, we have more than one solution to sorting.
// Further slides will show you that sometimes a problem can be solved in many different ways.


// Bubble sort
// The algorithm iterates repeatedly over the whole data set.
// If it finds two adjacent elements, that are put in the wrong order, it swaps them.



// Selection sort
// The algorithm iterates repeatedly over the whole data set that is yet unsorted.
// Within each iteration, it searches for the minimal element.
// Once the minimal element is found, it is being put at the end of a sorted part of the data set.



// Quick sort
// The algorithm picks one element of the data set.
// It is called a pivot and could be picked by different search criteria.
// Then, the data is partitioned into two subsets.
// One subset contains elements lower than the pivot, the other one - greater or equal.
// For each subset of data the process is repeated.



// Insertion sort
// The algorithm analyzes the elements of the data set, one by one.
// If the element is not at the right position...
// ...it is being moved to the right place, between those already sorted.