import takeAChance from './take-a-chance.js';
takeAChance('Daniel')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
