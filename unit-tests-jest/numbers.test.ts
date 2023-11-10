import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

test('should return an array with even numbers', () => {
  const result1 = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(result1).toEqual([2, 4, 6, 8]);

  const result2 = evenNumbers([2, 4, 6, 7]);
  expect(result2).toEqual([2, 4, 6]);

  const result3 = evenNumbers([0]);
  expect(result3).toEqual([0]);
});

test('should return a number formatted in dollars and cents', () => {
  const result1 = toDollars(1);
  expect(result1).toEqual('$1.00');

  const result2 = toDollars(444);
  expect(result2).toEqual('$444.00');
});

test('Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array', () => {
  const result1 = divideBy([1, 2, 3], 1);
  expect(result1).toEqual([1, 2, 3]);

  const result2 = divideBy([2, 3, 4, 6], 2);
  expect(result2).toEqual([1, 1.5, 2, 3]);

  const result3 = divideBy([0.2, 3.49], 2);
  expect(result3).toEqual([0.1, 1.745]);
});

test('Modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary', () => {
  const result1 = multiplyBy({ one: 1, two: '2' }, 1);
  expect(result1).toEqual({ one: 1, two: '2' });

  const result2 = multiplyBy({ one: '1', two: '2', three: 3 }, 3);
  expect(result2).toEqual({ one: '1', two: '2', three: 9 });
  const result3 = multiplyBy({ one: null, two: undefined }, 2);
  expect(result3).toEqual({ one: null, two: undefined });
});
