function ExampleConstructor() {}

console.log(ExampleConstructor instanceof Function);
console.log(typeof ExampleConstructor);

const NewExampleConstructor = new ExampleConstructor();
console.log(NewExampleConstructor instanceof ExampleConstructor);
