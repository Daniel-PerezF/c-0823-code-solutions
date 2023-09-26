function ExampleConstructor() {}

console.log(ExampleConstructor instanceof Function);
console.log(typeof ExampleConstructor);

const newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor instanceof ExampleConstructor);
