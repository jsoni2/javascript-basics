import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(true, false);

const arg = 'X';
console.log(Boolean(arg));
console.log(!!arg);
console.log(Boolean([]));
console.log(Boolean({}));

console.log(new Boolean(arg));
