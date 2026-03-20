//Reference data types:
//Objects
//Arrays
//Functions

//Objects
//{} is called object literal
//We add key value pairs inside the object literal
let person = {
    name: 'Aadithya',
    age: 20
};

//Dot notation is used to read/write into objects' properties
person.name = 'John';

console.log('Person details: ',person);
console.log('Person name detail(new(1st)): ',person.name);

//Bracket notation is also used to read/write into objects' properties
person['name'] = 'Mary';
console.log('Person name detail(new(2nd)): ',person.name);

//Arrays - Data structure used to store list of items
//[] is called array literal
let selectedColors = ['Red', 'Blue'];
console.log('Selected colors: ', selectedColors);
console.log('Selected first color: ',selectedColors[0]);
//Arrays are objects in JavaScript
console.log('No. of elements in array: ',selectedColors.length);

//Functions
//Declared with the function keyword
function greet() {
    console.log('Hello from the Greet function!');
}
//No semicolon at the end of function declaration
greet();

//Interactive functions with parameter passing
function personalisedGreeting(name){
    console.log('Hello', name+'!');
}
personalisedGreeting('John')

function square(number){
    return number * number;
}
//Functions can be called from within console.log() as well
console.log(square(45.011109739707599));