const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In Order:');
values.forEach((value) => console.log(value));
console.log('Reverse Order:');

values.forEach((value, index) => {
  const current = values.length - 1 - index;
  console.log(values[current]);
});
