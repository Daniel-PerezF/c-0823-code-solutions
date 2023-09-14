# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The initial "target" that initiated the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Event "bubble" from the inner element up through the parent element
- What DOM element property tells you what type of element it is?
  event.currentTarget(=this)
- What does the `element.closest()` method take as its argument and what does it return?
  Takes a selector as it's argument, returns the closest ancestor element or itself which matches the selector.
- How can you remove an element from the DOM?
  .remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Giving it a different class name than the element with the event listener

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