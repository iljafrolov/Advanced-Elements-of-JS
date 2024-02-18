//Regular Expressions


// a delimiter /, used twice,
// a pattern test, put between the delimiters,
// a modifier i, put after the delimiters.

var pattern = /test/i

// console.log(pattern.test("Test"))

// Slash / is a delimiter of the pattern.
// ^ refers to the beginning of the string.
// $ refers to the end of the string.

// /^test/ - will find "test" only at the beginning of our string,
// /test$/ - will find "test" only at the end of our string,
// /^test$/ - will check the whole string if it matches the pattern (beginning and end at the same time).

var pattern = /^test/i
// console.log(pattern.test("string test")) //gives false
// console.log(pattern.test("test string")) //gives true

// var pattern = /test$/i
// console.log(pattern.test("test string")) //false
// console.log(pattern.test("string test")) //true

var pattern = /^test$/i
// console.log(pattern.test("test string")) //false
// console.log(pattern.test("test")) //true


// Pattern: /g.t/
// String I get what you got.
// Finds: get and got.
// A dot means any character.

var pattern = /g.t/
// console.log(pattern.test("I get what you got"))

// To define a character set, we use: [ ].
// /g[eo]t/ will find get and got.
// [eo] means: 1 character from the set ("e" or "o").

var pattern = /g[eo]t/
// console.log(pattern.test("i want got"))

// practise
var pattern = /kn.w$/
//  console.log(pattern.test("I want to know")) //true
var pattern = /^kn.w$/
//  console.log(pattern.test("knew")) //true
var pattern = /^kn[oe]w/
//  console.log(pattern.test("i want to knew")) //false
var pattern = /know/
//  console.log(pattern.test("i want to know")) //true


//  Find a number in this string.
// We need a character set with all digits and put it into a regular expression.
// This expression searches for one character from the given set.
// It will find all digits separately.
// We don't know how many digits it would be, we use + sign:

var pattern = /[0-9]/
// console.log(pattern.test("2"))

// We can specify length of sets.

// /[0-9]{3}/ - "find me a 3-digit number"
// /[0-9]{3,}/ - "find me an at least 3-digit number"
// /[0-9]{2,5}/ - "find me a number of a length from 2 to 5 digits". But it will also check substrings.

// Regular expression to exact match a number between 2 and 5 digits
var pattern = /^[0-9]{2,5}$/
// console.log(pattern.test("123456"));

// note : if you remove the ^  and $  , you will not get an exact match because the pattern will match the substrings

//Modifiers

// Case-Insensitive expression: i
// /test/i will find: test, Test or TEST,
// /test/ will just find test (only with small letters).

// Multiline: m
// /Hello/ will find every Hello in the text.
// /^Hello/ will just find the first one (^ - beginning of the whole string).
// /^Hello/m will do the job.
// Multi-line modifier makes the program treat every line as a single string.

// Global: g
// With global modifier on, JS will search for all the matches.
// Without it, only the first match will be returned.



//Practice
// Write a regular expression for identifying your social security number with the following pattern
// 230686123T

var pattern = /^[0-9]{9}[A-Z]{1}$/
// console.log(pattern.test("230686123T")) //true



// Example: postal code
// A postal code (ZIP-code) consists of a two-letter country code and some digits.
// In most countries it is precisely five digits.
// So a pattern for a postal code can look like this:
// /[A-Z]{2}[0-9]{5}/


// /[A-Z]{2}[0-9]{5}/
// A group of capital letters from A to Z.
// Group must consist precisely of two characters.
// Then must come a group of digits from 0 to 9.
// The group must consist of five characters


// In some countries postal codes have four or six digits.
// To make the pattern more universal - we must do it like this:
// /[A-Z]{2}[0-9]{4,6}/


// Example - phone number
// It consists of digits (usually 9-10, depends on the country).
// Sometimes we write a phone number just as a number, sometimes we put some spaces or dashes in it.
// To make a good rule to find a telephone number in a text - we must be ready for all of the possibilities.

// /[0-9]+/ - would work for digits only.
// To find dashes in the number, we must modify the rule slightly: /[0-9\-]+/.
// Note a backslash before dash in the set ("turns off" its special character power).
// As for spaces... a space is a special character also.
// So we have: /[0-9\-\s]+/.

// /[0-9\-\s]+/
// If we use this rule, it will match phone numbers.
// But it will also match all spaces in the text.
// So we give some limitations to the pattern's length:
// /[0-9\-\s]{9,12}/.

// We want to make it start and end with a digit.
// We do it by using character sets:
// /[0-9][0-9\-\s]{7,10}[0-9]/.

// Now we have three character sets in the pattern:
// /[0-9][0-9\-\s]{7,10}[0-9]/
// first - a digit,
// then - seven to ten digits, dashes or spaces,
// finally - a digit.


var ssnPattern = /^[0-9]{6}-[0-9]{3}[A-Z]{1}$/
// console.log(ssnPattern.test("230686-123T"))

// Validate the following credit card number which has the  format as follows
// 3334-4445-4456-5678

var creditCard = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
// console.log(creditCard.test("3334-4445-4456-5678"))

var email = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$/
// console.log(email.test("123_afda@gmail.com"))


// JavaScript and RegExp
// RegExp's test method tells us whether a string contains a desired expression (true or false).
// String's match method gives us an array of matching occurrences.

// const regexp = /[0-9][0-9\-\s]{7,10}[0-9]/g;
// const str = `My phone is 500500500 or 600600600 - call me`;

// const item = str.match(regexp);
// // console.log(item)
// //["500500500", "600600600"]

// const regexp = /[0-9][0-9\-\s]{7,10}[0-9]/g;
// const str = `My phone is 500500500 or 600600600 - call me`;

// const test = regexp.test(str);
// //true

// We can also replace found patterns with different texts.
// We use replace() method to do it.

// var string = "test test sentence";
// var reg = /test/g;
// var replacement = "changed";

//a changed sentence
// console.log(string.replace(reg, replacement));

// or

// const regexp = /John/ig;
// const str = `Hi John , I was trying to call regarding work. john did not anwer`;

// const item = str.replace(regexp,"James");
// console.log(item)



// Change email Pattern using w
var email = /^[\w-.]+@[\w-.]+\.[a-z]+$/
// /\w+/ equals to /[a-zA-Z0-9_]+/ 

// console.log(email.test("afafaf.@afokosf.com"))


// Practise Exercise
// Write a function that will accept a string and return a valid postal code extracted from it (or an information that no postal code has been found).
// Let's assume that a postal code consists of:
// two letters,
// five digits,
// optional dash after the two first digits.

// function extractPostcode(str) {

//     var postalCodePattern = /[A-Za-z]{2}\d{2}-?\d{3}/;
//     var match = str.match(postalCodePattern)

//     if (match) {
//         return match[0];
//     } else {
//         return ("No postal code found")
//     }

// }

// console.log(extractPostcode("My postal address is AL23345"))

// Practise question
// Create a function that will find all words shorter than 4 letters in a given text.
// Modify your function so that it removes all the found words from the text.
// ??? hint "hint" Use \b in your pattern. It means the beginning or ending of a word.

function removeWord(str){
    var textPattern = /\b[a-zA-Z]{1,3}\b/g
    var match = str.match(textPattern)
    var regEXP = /\b[a-zA-Z]{1,3}\b/g
    if (match){
        return str.replace(regEXP,"")
    }
}
console.log(removeWord("aaa aaaaa aa aaaaa aa a aaaa aa"))

// or

// function findWords(text){
//     let pattern = /\b\w{1,3}\b/g
//     return text.match(pattern)
// }

// function removeWords(text){
//     let pattern = /\b\w{1,3}\b/g
//     return text.replace(pattern, "")
// }

// let string = "This is a string for testing"

// console.log(findWords(string))
// console.log(removeWords(string))