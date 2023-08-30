// Math Object
const a = 4;
const b = 8;
const c = 12;
const maximumValue = Math.max(a, b, c);
console.log('Maximum Value:', maximumValue);

const heroes = ['Spiderman', 'Batman', 'Superman', 'Doctor Strange'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random Number: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Random Hero: ', randomHero);

// Array Methods
const library = [
  { title: 'Dune', author: 'Frank Herbert' },
  { title: 'Enders Game', author: 'Orson Scott Card' },
  { title: 'The Shinning', author: 'Stephen King' },
];

const lastBook = library.pop();
console.log('Last Book:', lastBook);

const firstBook = library.shift();
console.log('First Book:', firstBook);

const js = {
  title: 'Javascript for Impatient Programers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

// String Methods
const fullName = 'Daniel Perez';
const firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
