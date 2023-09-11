# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging and checking the value of variables
- What is a "model"?
  Recreation of something
- Which "document" is being referred to in the phrase Document Object Model?
  The main entry point to the page, html document
- What is the word "object" referring to in the phrase Document Object Model?
  Every html element
- What is a DOM Tree?
  Every html element that makes up our page
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById(id), querySelector(css)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(css)
- Why might you want to assign the return value of a DOM query to a variable?
  Debugging and ease of acess
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to go through all the elements in the HTML before the javscript can access them
- What does `document.querySelector()` take as its argument and what does it return?
  It takes a selector as an argument and returns the first element within the document that matches the specified selector
- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes a selector as an argument and returns a static node list representing a list of the documents elements that match the specified group of selectors

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
