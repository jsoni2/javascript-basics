import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(Number.prototype);
console.log(parseFloat((99.12345678).toFixed(4)));
console.log((99.12345678).toPrecision(5));
console.log(new Number(99).valueOf());
