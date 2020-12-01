import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log(typeof 'Pepperoni');
console.log('Pepperoni' instanceof String);
console.log(new String('Pepperoni') instanceof String);
console.log(String('Pepperoni') instanceof String);
console.log(Object.prototype.toString.call('Pepperoni'));
