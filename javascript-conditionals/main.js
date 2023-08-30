/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('Is under five:', isUnderFive());

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('Is even:', isEven(1));

function startsWithJ(string) {
  if (string.startsWith('J')) {
    return true;
  } else {
    return false;
  }
}
console.log("Starts with 'J':", startsWithJ('J'));

const person = {
  name: 'Daniel',
  age: 24,
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log('Is old enough to drink:', isOldEnoughToDrink(person));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('Is old enough to drive:', isOldEnoughToDrive(person));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
console.log(
  'Is old enough to drink and drive:',
  isOldEnoughToDrinkAndDrive(person)
);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'netural';
  } else if (pH <= 6 || pH === 0) {
    return 'acid';
  } else if (pH >= 8 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('Categorize acidity:', categorizeAcidity(1));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'Welcome warner brothers!';
    case 'wakko':
      return 'welcome warner brothers!';
    case 'dot':
      return 'im cute~';
    default:
      return 'Goodnight everybody';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'Big Lebowski';
    case 'horror':
      return 'exorcist';
    case 'drama':
      return 'a star is born';
    case 'musical':
      return 'annie';
    case 'scifi':
      return 'interstellar';
  }
}
