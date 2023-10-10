const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

function evenNum(num) {
  if (num % 2 === 0) {
    return num;
  }
}
console.log(numbers.filter(evenNum));

const noD = names.filter(
  (letter) => !letter.includes('D') && !letter.includes('d')
);
console.log(noD);
