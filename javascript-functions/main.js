function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('Minutes to seconds:', convertMinutesToSeconds(22));

function greet(name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}
console.log('Greeting:', greet('Daniel Perez'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log('The area is:', getArea(22, 44));

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}
console.log(getFirstName({ firstName: 'Daniel', lastName: 'Perez' }));

function getLastElement(array) {
  const lastIndex = array.at(-1);
  return lastIndex;
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
