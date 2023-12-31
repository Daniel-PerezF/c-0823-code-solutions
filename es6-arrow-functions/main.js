const numbers = [12, 11, 10, 9, 8, 7, 6];
const book = {
  name: 'Bea Wolf',
  author: 'Zach Weinersmith',
  illustrator: 'Boulet',
  published: 2023,
};

console.log('Exercise 1');
// const doubled = numbers.map(function (n) {
//   return n * 2;
// });

const doubled = numbers.map((n) => n * 2);
console.log('doubled', doubled);

console.log('\n\nExercise 2');
// function actOnEntries(obj, action) {
//   Object.entries(obj).forEach(function (e) {
//     action(e);
//   });
// }
// actOnEntries(book, function (entry) {
//   console.log(`${entry[0]} = ${entry[1]}`);
// });

const actOnEntries = (obj, action) => {
  Object.entries(obj).forEach((e) => {
    action(e);
  });
  // Object.entries(obj).forEach(function (e) {
  //   action(e);
};

actOnEntries(book, (entry) => {
  console.log(`${entry[0]} = ${entry[1]}`);
});

console.log('\n\nExercise 3');
// function foo() {
//   console.log("Why doesn't this log???");
// }
// console.log('foo type:', typeof foo);

const foo = () => {
  console.log("Why doesn't this log???");
};
console.log('foo type:', typeof foo);

console.log('\n\nExercise 4');
const startTime = Date.now();
let count = 5;
console.log('Start');

// const intervalId = setInterval(function () {
//   console.log(count);
//   count--;
//   if (count <= 0) {
//     console.log('Blast off!');
//     console.log(`Runtime ${Math.round((Date.now() - startTime) / 1000)}s`);
//     clearInterval(intervalId);
//   }
// }, 500);

const intervalId = setInterval(() => {
  console.log(count);
  count--;
  if (count <= 0) {
    console.log('Blast off!');
    console.log(`Runtime ${Math.round((Date.now() - startTime) / 1000)}s`);
    clearInterval(intervalId);
  }
}, 500);
