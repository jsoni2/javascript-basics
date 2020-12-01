import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(typeof 99.66);
console.log(99 instanceof Number);
console.log(Number('99') instanceof Number);
console.log(new Number('99') instanceof Number);
console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number');

