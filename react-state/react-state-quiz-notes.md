# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Functions that are only available while react is rendering, start with "use".

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Call hooks at the "top" level, Unconditional;y, Only use for react components

- What is the purpose of state in React?
  To "remember" data between renders

- Why can't we just maintain state in a local variable?
  Local variables dont persist between renders.

- What two actions happen when you call a `state setter` function?
  the variable updates, the component re-renders
- When does the local `state variable` get updated with the new value?
  On each render

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
