# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  After rendering (calling) components for the 1st time

- What is a React Effect?
  They let you run some code after rendering so you can sync your component with some system outside of react

- When should you use an Effect and when should you not use an Effect?
  You should use an effect when you need to sync with external systems outside of react.
  You don't need effects to transform data for rendering or to handle events.

- When do Effects run?
  At the end of a commit after the screen updates

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  They tell react to skip unnecessarily re-running effects , you decalre them as a second prop in an array.

- Why would you want to clean up from an Effect?
  To prevent an effect from unmounting before necessary

- How do you clean up from an Effect?
  By using a clean up function

- When does the cleanup function run?
  Each time before the effect runs again and one final time when the component gets unmounted

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
