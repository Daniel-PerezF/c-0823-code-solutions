const $countdown = document.querySelector('.countdown-display');

let counter = 4;
function countdownTimer() {
  if (counter >= 0) {
    $countdown.textContent = counter;
    counter--;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdownTimer, 1000);
