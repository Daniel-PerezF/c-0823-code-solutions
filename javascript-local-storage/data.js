/* exported todos */
let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
// console.log(previousTodosJSON);

todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', handleBeforeUnload);

function handleBeforeUnload(event) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
