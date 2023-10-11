# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && returns the value of the first falsy operand and the last operand if all are found to be truthy. || returns true if only one or more of its operands is truthy. useful for conditionaly evaluating an exrpession.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  For && if the result of one conversion is found to be falsy, the and operator stops and returns the orignal value of the falsy operand and no other operands are evaluated.
  For || if the first operand is found truthy the second will never execute.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Returns its right hand side operation when its left operand is null or undefined otherwise it returms its left operator. Differs from the && because || returns right side operand if it is any falsy value not only null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  Takes a condition, an expression to execute if the condition is truthy followed by a colon, and the expression to execute if the condition is falsy. It differs because the ?: is a single programming statement while if/else is a block of statements.

- What is the `?.` (optional chaining) operator? When would you use it?
  Acesses an objects property or calls a function and returns undefined if it does not exist. You would use it when exploring the content of an object when there is no gurantee a property is required.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Allows for iterables to be expanded in places where zero or more arguments are expected. You would use it to make a deep copy of an array without affecting the originl.

- What data types can be spread into an array? Into an object?
  Array and strings. All primitives for objects.
- How does spread syntax differ from rest syntax?
  They look the same but spead expands and into its elements while rest collects multiple elements and condesnes them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
