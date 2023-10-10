const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In Order:');
values.forEach((value) => console.log(value));
console.log('Reverse Order:');
// values.forEach((value) => {
//   for(let i = values.length -1; i >= 0; i--){
//     console.log(values[i])
//   }
// })
const reversed = [];
values.forEach((value, index) => {
  reversed.unshift(value);
});

reversed.forEach((value) => {
  console.log(value);
});
