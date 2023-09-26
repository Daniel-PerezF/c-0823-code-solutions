const $images = document.querySelectorAll('img');
const $circles = document.querySelectorAll('.fa-circle');
const $circle1 = document.querySelector('#one');
const $circle2 = document.querySelector('#two');
const $circle3 = document.querySelector('#three');
const $circle4 = document.querySelector('#four');
const $circle5 = document.querySelector('#five');
const $left = document.querySelector('#left');
const $right = document.querySelector('#right');
let imgSwap = setInterval(swap, 3000);
let counter = 0;

function swap() {
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = counter + 1;
  if (counter < $images.length) {
    $images[counter].setAttribute('class', 'active');
    $circles[counter].setAttribute('class', 'fa-solid fa-circle');
  } else {
    clearInterval(imgSwap);
    counter = 0;

    $images[counter].setAttribute('class', 'active');
    $circles[counter].setAttribute('class', 'fa-solid fa-circle');
    imgSwap = setInterval(swap, 3000);
  }
}

$left.addEventListener('click', function () {
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = counter - 1;
  if (counter < 0) {
    counter = $images.length - 1;
    $images[counter].setAttribute('class', 'active');
    $circles[counter].setAttribute('class', 'fa-solid fa-circle');
    clearInterval(imgSwap);
    imgSwap = setInterval(swap, 3000);
  } else {
    clearInterval(imgSwap);

    $images[counter].setAttribute('class', 'active');
    $circles[counter].setAttribute('class', 'fa-solid fa-circle');
    imgSwap = setInterval(swap, 3000);
  }
});

$right.addEventListener('click', function () {
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = counter + 1;
  if (counter < $images.length) {
    $images[counter].setAttribute('class', 'active');
    $circles[counter].setAttribute('class', 'fa-solid fa-circle');
    clearInterval(imgSwap);
    imgSwap = setInterval(swap, 3000);
  } else {
    clearInterval(imgSwap);
    counter = 0;

    $images[counter].setAttribute('class', 'active');
    $circles[counter].setAttribute('class', 'fa-solid fa-circle');
    imgSwap = setInterval(swap, 3000);
  }
});

$circle1.addEventListener('click', function () {
  clearInterval(imgSwap);
  imgSwap = setInterval(swap, 3000);
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = 0;
  $images[counter].setAttribute('class', 'active');
  $circles[counter].setAttribute('class', 'fa-solid fa-circle');
});

$circle2.addEventListener('click', function () {
  clearInterval(imgSwap);
  imgSwap = setInterval(swap, 3000);
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = 1;
  $images[counter].setAttribute('class', 'active');
  $circles[counter].setAttribute('class', 'fa-solid fa-circle');
});

$circle3.addEventListener('click', function () {
  clearInterval(imgSwap);
  imgSwap = setInterval(swap, 3000);
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = 2;
  $images[counter].setAttribute('class', 'active');
  $circles[counter].setAttribute('class', 'fa-solid fa-circle');
});

$circle4.addEventListener('click', function () {
  clearInterval(imgSwap);
  imgSwap = setInterval(swap, 3000);
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = 3;
  $images[counter].setAttribute('class', 'active');
  $circles[counter].setAttribute('class', 'fa-solid fa-circle');
});

$circle5.addEventListener('click', function () {
  clearInterval(imgSwap);
  imgSwap = setInterval(swap, 3000);
  $images[counter].setAttribute('class', 'hidden');
  $circles[counter].setAttribute('class', 'fa-regular fa-circle');
  counter = 4;
  $images[counter].setAttribute('class', 'active');
  $circles[counter].setAttribute('class', 'fa-solid fa-circle');
});
