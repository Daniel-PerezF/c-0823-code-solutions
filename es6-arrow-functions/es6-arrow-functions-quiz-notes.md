# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  (arugment) => expression

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It cannot return statments only expressions
- When using _concise body syntax_, how do you return an object literal?
  You cant
- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    None
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    One
  - What type of argument is passed to the function `foo`?
    A function
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    (y) => {
    console.log(`4y = ${4 * y}`);
    }
  - How many arguments does the arrow function take?
    One
  - What value does it return?
    It logs result of 4 \* y
  - How many arguments are passed to the function `bar`?
    One
  - What type of argument is passed to the function `bar`?
    A function
  - When does the arrow function's code get executed?
    When "bar" is called
- How does the value of `this` differ between standard functions and arrow functions?
  In regular functions "this" represents the obj that called the function. In arrow functions "this" represents the obj that defined the arrow function.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
