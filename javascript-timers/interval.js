const $countdown = document.querySelector('.countdown-display');

let counter = 4;
function countdownTimer() {
  if (counter >= 0) {
    $countdown.textContent = counter;
    counter--;
  } else {
    clearInterval(timer);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}

const timer = setInterval(countdownTimer, 1000);
