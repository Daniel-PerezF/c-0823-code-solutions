function handleFocus(event) {
  console.log('focusEventFired!');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blurEventFired!');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, ':', event.target.value);
}

const $userName = document.getElementById('user-name');
const $userEmail = document.getElementById('user-email');
const $userMessage = document.getElementById('user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
