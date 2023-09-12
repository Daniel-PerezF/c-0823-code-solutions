let counter = 0;

function handleClick(event) {
  counter++;

  if (counter % 2 === 0) {
    $clickButton.className = 'button-off';
  } else $clickButton.className = 'button-on';

  if (counter % 2 === 0) {
    $column.className = 'column-off';
  } else $column.className = 'column-on';
}

const $clickButton = document.querySelector('.button-on');
$clickButton.addEventListener('click', handleClick);

const $column = document.querySelector('.column-on');
