console.log("scripts file loaded: inline string");

let string = "string from variable";
console.log(string);

let booleanExample = true;
console.log(booleanExample + " boolean example");

let numberExample = 5;

console.log(numberExample + ' number example')

console.log( 10 % 5 + " example of 10 % 5");

console.log(typeof(booleanExample) + " typeof booleanExample variable");

let wordToAdd = 'new';

console.log(`exaple of template literals with this "${wordToAdd}" word!`);

let equalityCheck = 5 === 5;


console.log("equality check on 5 === 5 " + equalityCheck);

let testCoercion = 5 == "5";

console.log("example of type coercion of 5 == '5' " + testCoercion);

const sentence = "I am new to learning JavaScript";
//using splice method return I am new
console.log(sentence.slice(0,8));

console.log(sentence.replace("am", "am not"));

let studentName = "James ";
console.log(studentName.concat("Albert"))