import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
console.log('Pizza "Hello!"');

const pizza = 'Pepperoni';
console.log('Pizza is: ' + pizza + '!');
console.log(`
Pizza is:
${pizza}!
`);

console.log(String(55 + 11), 55 + '11');
console.log(String({ name: 'Pepperoni' }));
console.log(String([1, 2, 3, 4]));

console.log(new String(55));
