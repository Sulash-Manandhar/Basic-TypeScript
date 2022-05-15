"use strict";
//Basic Types
let id = 5;
let company = 'MeInRealLife';
let isPublished = true;
let x = "Hello";
let age;
age = 12;
x = true; //data type can be changed
console.log("ID:", id);
//array that only contain number
let ids = [1, 2, 3, 4, 5];
//array of different data type
let arr = [1, true, "Hello"];
//Tuple (order is important)
let person = [1, 'Sulash', false];
let employee;
employee = [
    [1, "Sulash"],
    [2, "Jenifer"],
    [3, "Bety"]
];
//Union
let pid;
pid = "22";
pid = 12;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["Left"] = 4] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Jhon'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Funtion
//function with return type number
function addNum(x, y) {
    return x + y;
}
console.log("Sum:", addNum(1, 3));
//function with no return type
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Jhon'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
//used to create objects
class Person {
    //runs when instance is created 
    constructor(id, name) {
        this.id = id; //current instance 
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const sulash = new Person(1, 'Sulash Manandhar');
const ketyy = new Person(2, 'Ketty Perry');
console.log(sulash, ketyy);
console.log(sulash, sulash.register());
//used to create objects
class Person1 {
    //runs when instance is created 
    constructor(id, name) {
        this.id = id; //current instance 
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(7, 'Jughead', 'Developer');
console.log(emp.register());
//Generics
// generic helps to define a placeholder, meaning it will look for same type of data type rather than mix data type
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["Jhon", "Suash", "Jimmy"]);
console.log(numArray);
