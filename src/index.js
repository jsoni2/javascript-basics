import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// // Boolean Literal, Function and Constructor Syntax
// console.log(true, false);

// const arg = 'X';
// console.log(Boolean(arg));
// console.log(!!arg);
// console.log(Boolean([]));
// console.log(Boolean({}));

// console.log(new Boolean(arg));

// // Exploring String Methods

// console.log(String.prototype);

// console.log('Pepperoni'.indexOf('P'));
// console.log('Pepperoni'.includes('P'));

// console.log('Pepperoni'.replace('oni', 'fire'));
// console.log('Pepperoni'.replace(/oni$/, 'fire'));

// console.log('Pepperoni'.slice(2, -3));

// console.log('Pepperoni~Plain'.split('~')[1]);
// console.log('Pepperoni~Plain'.split(/~/)[1]);

// console.log('  4444 5555 6666 7777  '.trim());

// // Correctly Type-Checking Strings
// console.log(typeof 'Pepperoni');
// console.log('Pepperoni' instanceof String);
// console.log(new String('Pepperoni') instanceof String);
// console.log(String('Pepperoni') instanceof String);
// console.log(Object.prototype.toString.call('Pepperoni'));

// // Strings and Immutability
// const immutableString = 'I shall not change!';
// const uppercaseString = immutableString.toUpperCase();

// console.log(immutableString, uppercaseString);

// // String Properties and Indexes
// console.log(new String(5599));
// console.log('Pepperoni'.length);

// const pizza = 'P e p p e r o n i';
// console.log(pizza[0], pizza[pizza.length - 1], pizza.length);

// // String Literal, Function and Constructor Syntax
// console.log('Pizza "Hello!"');

// const pizzas = 'Pepperoni';
// console.log('Pizza is: ' + pizzas + '!');
// console.log(`
// Pizza is:
// ${pizzas}!
// `);

// console.log(String(55 + 11), 55 + '11');
// console.log(String({ name: 'Pepperoni' }));
// console.log(String([1, 2, 3, 4]));

// console.log(new String(55));

// // Exploring Number Methods
// console.log(Number.prototype);
// console.log(parseFloat((99.12345678).toFixed(4)));
// console.log((99.12345678).toPrecision(5));
// console.log(new Number(99).valueOf());

// // Correctly Type-Checking Numbers
// console.log(typeof 99.66);
// console.log(99 instanceof Number);
// console.log(Number('99') instanceof Number);
// console.log(new Number('99') instanceof Number);
// console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number');

// // Numbers and Immutability
// const immutableNumber = 99;
// let referencedNumber = immutableNumber;
// referencedNumber = 44;
// console.log(immutableNumber);
// console.log(referencedNumber);

// // Understanding Not-a-Number
// const result = Number('55px');

// // isNaN "NaN"
// console.log(isNaN(result));
// console.log(isNaN('I am a String!'));

// console.log(Number.NaN);
// console.log(Number.isNaN(result));
// console.log(Number.isNaN('I am another String!'));
// console.log(Number.isNaN(Number.NaN));

// console.log(Number.isInteger(66));

// // Parsing Strings to Numbers
// console.log(parseInt('55px', 10));
// console.log(parseFloat('55.9999px') * 10);

// console.log(Number('55e10'));
// console.log(Number('55.9999'));
// console.log(9 + +'99.5555');

// // Integers and Floating Points
// console.log(0.1 + 0.2);

// const price = 9.33;
// const quantity = 3;
// console.log(price * quantity);

// const anotherPrice = 9.33 * 100;
// const anotherQuantity = 3;
// console.log((anotherPrice * anotherQuantity) / 100);

// // Number Literal, Function and Constructor Syntax
// const literalNumber = 99;
// console.log(literalNumber);

// // function syntax
// // perform a type-conversion in a non-constructor context
// console.log(Number(55));
// console.log(Number('33'));
// console.log(Number('44px'));

// // constructor syntax, creates a wrapper Object
// // avoid using it
// console.log(new Number('44px'));
