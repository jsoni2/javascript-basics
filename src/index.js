import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
const result = Number('55px');

// isNaN "NaN"
console.log(isNaN(result));
console.log(isNaN('I am a String!'));

console.log(Number.NaN);
console.log(Number.isNaN(result));
console.log(Number.isNaN('I am another String!'));
console.log(Number.isNaN(Number.NaN));

console.log(Number.isInteger(66));

