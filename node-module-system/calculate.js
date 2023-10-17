import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const [, , num, operator, num2] = process.argv;
const a = Number(num);
const b = Number(num2);
let result;
if (operator === 'plus') {
  result = add(a, b);
} else if (operator === 'minus') {
  result = subtract(a, b);
} else if (operator === 'times') {
  result = multiply(a, b);
} else if (operator === 'over') {
  result = divide(a, b);
}
console.log(result);
