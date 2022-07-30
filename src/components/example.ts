let boolFalse: boolean = false;
let boolTrue: boolean = true;
let num: number = 0.222;
let hex: number = 0xbeef;
let bin: number = 0b0010;
let str: string = 'Hello World!';
let multiStr: string = `Двухстрочная
переменная`;
let expression = 'Новое выражение';
let expressionStr: string = `Выражение str: ${expression}`;
let multitypeVar: string | number = 'String';
multitypeVar = 20;
if (typeof str === "number") {
    console.log('Str — это число')
} else {
    console.log('Str — это не число')
}

class Human {
    name: string;

    constructor(data: string) {
        this.name = data;
    }
}

let human = new Human('Gabriel')
if (human instanceof Human) {
    console.log(`${human.name} человек`)
}
let str2: any = 'Текстовая переменная';
let strLength = (<string>str2).length;
let strings: string[] = ['Hello', 'World', '!'];
let numbers: Array<number> = [1, 2, 3, 4, 5];
let stringsAndNumbers: (string | number)[] = ['Age', 20];
let numbersArray: number[][] = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
let exampleTuple: [number, string] = [20, 'https://tproger.ru'];

enum State {
    Playing,
    Paused,
    Stopped
}

enum State2 {
    Playing = 'PLAYING',
    Paused = 'PAUSED',
    Stopped = 'STOPPED'
}

const human2 = {
    firstName: 'Старец',
    age: 32,
    height: 185,
    greet: function () {
        console.log("Приветствую тебя, путник!")
    }
};
type Human3 = { firstName: string, age: number, height: number };
const human3: Human3 = {firstName: 'Franz', age: 32, height: 185};

function printState(state: State): void {
    console.log(`The song state is ${state}`)
}

function add(num1: number, num2: number): number {
    return num1 + num2
}

add(2, 5);

function printName(firstName: string, lastName?: string) {
    if (lastName)
        console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
    else
        console.log(`Firstname: ${firstName}`);
}

printName('Gabriel', 'Tanner');
printName('Gabriel');

interface Person {
    name: string
    age?: number
}

const person: Person = {name: 'Frank', age: 28};
const person2: Person = {name: 'Gabriel'};
