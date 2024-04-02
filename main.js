"use strict";
//DAY 29 
//TASK 1 (Find the position of Substring) using function
function findcodeposition(str) {
    return str.indexOf("Code"); //looks for "code" and tells where it found it 
}
//example: Searching withing a sentence
console.log(findcodeposition("Learn to code with JavaScript"));
//RESULT -1
// it tell us the position number where "code" starts.
//TASK 2 (Checking for text Presence) using function
//using boolean type true or false 
//this function checks if a sentence has "Mango" in it
function hasMango(str) {
    return str.includes("Mango"); //Checks for Mango and return true or false 
}
//Example: seeing if a text mentions Mango
console.log(hasMango("I Love To Eat Mango!!"));
//RESULT "true"
//it simply tell us the sentence has the word mango true or false if yes so true if no so false.
//TASK 3 (Extracting a Substring)
//this function takes out the first 10 character from any text 
function extractfirsttencharacter(str) {
    return str.substring(0, 10); //gets characters from start to position 10 
}
//Example: taking the first 10 characters of a sentence
console.log(extractfirsttencharacter("Hey!! Now Coding is Life!!"));
//RESULT Hey!! Now 
//show the first 10 characters 
//it gives us a smaller pice of the original text, just the beginning part.
