# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async creates an asynchronous function, await makes the code wait to be executed.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async returns promises, await is similr to catch because it is waiting for a proise to be resolved.
- When do you use `async`?
  Requesting data from a network, accessing a database, read/writing a new file.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Inside an async funciton, do not use for sync functions. Nothing happens.
- How do you handle errors with `await`?
  If the promise is rejected the await expression throws the rejected value.
- What do `try`, `catch` and `throw` do? When do you use them?
  try is used to execute code that might throw an error, catch is the code block that executes when an error is found, throw is used to manually throw an exception
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  It will not wait for the promise to resolve and will continue to execute the following code. The rejection will not be executed at all.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, easier to write and understand

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
