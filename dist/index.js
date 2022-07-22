"use strict";
//basic types
let id = 5;
let name_ = 'brad';
let boo = true;
let anni = 5;
//Split declaration
let name2;
name2 = "juan";
//Union
let union = "jose";
//array
let ids = [1, 2, 3, 4, 5, 6];
//Tuple
let ids2 = [1, '2'];
// Tuple Array
let names;
names = [['juena', 1],
    ['juan', 2],
    ['juenaa', 3]
];
// Enum
var tapes;
(function (tapes) {
    tapes["tape1"] = "tape2";
    tapes["tape2"] = "tape3";
    tapes["tape3"] = "tape1";
})(tapes || (tapes = {}));
const user = {
    id: 1,
    name: 'jsoe',
};
// type asertion 
let cid = 1;
let pid = cid;
// functions 
function multiply(x, y) {
    return x * y;
}
const user2 = {
    id: 1,
    name: 'jsoe',
};
const addMath = (x, y) => x + y;
const subMath = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const fibie = new Person(1, 'Fibie Thunderman', 15);
//Subclasses can inherit from superclasses
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age); //can be inherited from super class in this case the class is Person
        this.position = position;
    }
}
//const emp = new Employee(3, 'Shawn', 3, 'Developer')
// generics
//T is the generic Generics works like a placeholder for future type definitions
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]); // limits the array to be only number type
let strArray = getArray(['brad', 'jhun']); // limits the array to be only string type
