// 1. Use strict
// Added in ES5
// use this for Vanila JavaScript.
'use strict';


// 2. Variable, rw(read / write)
// let (added in ES6)
let globalName = 'global name';
{
let name = 'dong';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
age = 4;
var age;
}
console.log(age);

// 3. Constant, r (read only)
// use const whenver possible.
// only use let if variable needs to change.
const datsInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// reference item : object, box container
// function, first-class function

// number
const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values: infinity, -infinity, Not a Number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;    // over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals or template string
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// Symbol
// create unique identifiers for objects

// const symbol1 =  new Symbol('id');   // error
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);    // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);  // ture
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // description 사용해야 됨

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
console.log(ellie); // > {name: "ellie", age: 20}
ellie.age = 21;
console.log(ellie); // > {name: "ellie", age: 21}

// 5. Dynamic typing: dynamically typed language (선언할 때 변수의 타입을 미리 설정 안하는 것)
let text = 'hello';
console.log(text.charAt(0));	// > h
console.log(`value: ${text}, type: ${typeof text}`);    // > value: hello, type: string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    // > value: 1, type: number

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);    // > value: 75, type: string

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);    // > value: 4, type: number

console.log(text.charAt(0));							// > error (TypeScript를 배우는 이유)