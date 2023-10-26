# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  define the funciton and export the component

- How do you use JSX in a React component?
  You put them inside <> </>

- How do you declare the props a React component needs?
  destructure them,
  function Name ({component1, component2})

- How do you pass props to a React component?
  You structure it like an object <Avatar person={{ name: 'Lin Lanying', imageId: '1234' }} />

- How do you include JavaScript expressions in JSX?
  Inside curly braces

- What are React hooks and what are the three "Rules of Hooks"?
  They are functions that are only available when rendering and they start with "use", 1. Only call hooks at the top level 2. Only call hooks from react components 3. Only call them unconditionally

- How do you manage state in a React component?
  Using the useState hook

- How do you handle events in React?
  Adding event handlers

- How do you let a parent component know that an event happened?
  Pass the event handler as a prop to the component

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
