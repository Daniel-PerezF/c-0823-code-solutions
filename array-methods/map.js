const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const newArr = prices.map((value) => {
  const obj = {};

  obj.price = value;
  obj.salesPrice = value / 2;
  return obj;
});

const priceArr = prices.map((value) => {
  const newArr = '$' + value.toFixed(2);
  return newArr;
});
console.log('Formatted Prices:', priceArr);
