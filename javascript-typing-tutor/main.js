const $letter = document.querySelectorAll('span');

let counter = 0;

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === $letter[counter].textContent) {
    $letter[counter].className = 'greenText';
    $letter[counter + 1].className = 'underline';
    counter++;
  } else {
    $letter[counter].className = 'red-underline redText';
  }
}
