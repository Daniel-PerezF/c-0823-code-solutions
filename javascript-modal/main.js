function handleClick(event) {
  $hiddenDiv.className = 'hidden';
}
function noClick(event) {
  $hiddenDiv.className = 'hidden-div';
}

const $openModal = document.querySelector('.open-modal');
$openModal.addEventListener('click', handleClick);

const $hiddenDiv = document.querySelector('.hidden-div');

const $noBtn = document.querySelector('.no-button');
$noBtn.addEventListener('click', noClick);

// const $hidden = document.querySelector(".hidden")
