// string

let myName: string = 'Max';
// myName = 28;

let num: number = 10;
// num = 'Max';

let isLoggin: boolean = true;
// isLoggin = 'true';

let data: number;
data = 27;

// Array
let address: [string, number] = ["surat", 99];

// Enum
enum Color {
    Grey,
    Green = 1500,
    Blue
}

let myColor: Color = Color.Blue;
console.log('This is a color' + myColor);

function sayHello(): void {
    console.log('This is a sayHello');
}

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}


let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();

myMultiply = multiply;
let mul = myMultiply(10, 2);
console.log(mul);

let userData: { name: string, age: number} = {
    name: 'Typescript',
    age: 25
};
console.log(userData);

type Complex = { data: number[], output: (all: boolean) => number[]};

let complex1 : Complex = {
  data: [4, 5, 2],
  output: function(all: boolean): number[] {
      return this.data;
  }
};

let complex2 : Complex = {
    data: [4, 5, 2],
    output: function(all: boolean): number[] {
        return this.data;
    }
};

// Union Types

let myRealAge: number | string = 27;
myRealAge = '27';

// check types

let finalValue = 'A String';
if (typeof finalValue == 'string') {
    console.log('this is a string');
}

// Never type

function neverReturn():never {
    throw new Error('An Error');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let thisCanBeNull;
thisCanBeNull = null;
let thisOnlyBeNull = null;

