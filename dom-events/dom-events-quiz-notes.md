# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Debugging, checking variable values
- What is the purpose of events and event handling?
  Events are things that happenin the system, event handling runs a block of code when an event happens
- Are all possible parameters required to use a JavaScript method or function?
  No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()
- What is a callback function?
  A function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  EventTarget
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  Stores what happens during an event
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first has two arguements, the event click and a variable handleClick. The second has two arguments as well, the event click and a fucntion handleClick

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
