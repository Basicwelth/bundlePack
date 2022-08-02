import "./components/example";
import {ModuleObject, ModuleClass, NewModule, FuncModule} from "./components/Modules";

ModuleObject.init();
ModuleObject.second();
const myClass = new ModuleClass();
myClass.second();
myClass.three();
const extClass = new NewModule();
extClass.init();
const console = window.console;
FuncModule();
let snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        let snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

function Person2(name) {
    this.name = name;
}

Person2.prototype.prefixName = function (arr) {
    return arr.map(character => this.name + character);
};

const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x);

const string = 'food';
const substring = 'foo';

console.log(string.includes(substring));
'meow'.repeat(3);

let text1 = `This string contains "double quotes" which don't need to be escaped anymore.`;

const name = 'Tiger';
const age = 13;

console.log(`My cat is named ${name} and is ${age} years old.`);

let today = new Date();
let text2 = `The time and date is ${today.toLocaleString()}`;


let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2

let luke = {occupation: 'jedi', father: 'anakin'};
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father);

function sumTwo(a, b) {
    return a + b;
}

function sumThree(a, b, c) {
    return a + b + c;
}

let api = {
    sumTwo,
    sumThree
};

export default api;

function addTwoNumbers(x = 0, y = 0) {
    return x + y;
}

addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0

function logArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

function initializeCanvas(
    {height = 600, width = 400, lineStroke = 'black'} = {}) {
}

Math.max(...[-1, 100, 9001, -32]); // 9001

let cities = ['San Francisco', 'Los Angeles'];
let places = ['Miami', ...cities, 'Chicago']; // ['Miami', 'San Francisco', 'Los Angeles', 'Chicago']

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    incrementAge() {
        this.age += 1;
    }
}

class Personal extends Person {
    constructor(name, age, gender, occupation, hobby) {
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    incrementAge() {
        super.incrementAge();
        this.age += 20;
        console.log(this.age);
    }
}

ModuleFunc.three();