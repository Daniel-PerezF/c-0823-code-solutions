let counter = 0;
function keepCount() {
  counter++;
  $clickCount.textContent = 'Clicks: ' + counter;

  if (counter < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotBtn.classname = 'hot-button warm';
  } else if (counter < 16) {
    $hotBtn.className = 'hot-button hot';
  } else $hotBtn.className = 'hot-button nuclear';
}

const $clickCount = document.querySelector('.click-count');

const $hotBtn = document.querySelector('.hot-button');
$hotBtn.addEventListener('click', keepCount);
