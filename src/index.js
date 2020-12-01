import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(parseInt('55px', 10));
console.log(parseFloat('55.9999px') * 10);

console.log(Number('55e10'));
console.log(Number('55.9999'));
console.log(9 + +'99.5555');
