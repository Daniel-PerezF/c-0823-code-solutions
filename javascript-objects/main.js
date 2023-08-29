const student = {
  firstName: 'Daniel',
  lastName: 'Perez',
  age: 24,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Costco';
console.log('Value of student.livesInIrvine:', student.livesInIrvine);
console.log('Value of student.previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2021,
};
vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;
console.log('Value of vehicle["color"]:', vehicle['color']);
console.log('Value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Bruno',
  type: 'Yorkie',
};
delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
