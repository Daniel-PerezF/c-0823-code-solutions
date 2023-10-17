import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , num, operator, num2] = process.argv;
const a = Number(num);
const b = Number(num2);
let result;
if (isNaN(a)) {
  console.log('Not a number', num);
  process.exit(1);
}
if (isNaN(a)) {
  console.log('Not a number', num2);
  process.exit(1);
}
if (operator === 'plus') {
  result = add(a, b);
} else if (operator === 'minus') {
  result = subtract(a, b);
} else if (operator === 'times') {
  result = multiply(a, b);
} else if (operator === 'over') {
  result = divide(a, b);
} else {
  console.error('Invalid operator', operator);
  process.exit(1);
}
console.log(result);
