/*
For each of the exercises below, assume you are starting with the following people array.

const people = ["Greg", "Mary", "Devon", "James"];
Write the command to remove “Greg” from the array.
Write the command to remove “James” from the array.
Write the command to add “Matt” to the front of the array.
Write the command to add your name to the end of the array.
Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
Write the command that gives the indexOf where “Mary” is located.
Write the command that gives the indexOf where “Foo” is located (this should return -1).
Redefine the people variable with the value you started with. Using the splice command, remove “Devon” 
from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”
*/

function arrayPractice(people){
let peopleCopy = people;
peopleCopy.shift();

peopleCopy.pop();

peopleCopy.unshift("Matt");

peopleCopy.push("James");

peopleCopy.splice(2,1);

peopleCopy.indexOf("Mary")

peopleCopy.indexOf("Foo")

peopleCopy = people;

peopleCopy.splice(2);

peopleCopy.splice

}
const people = ["Greg", "Mary", "Devon", "James"];






