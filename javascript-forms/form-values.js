const $contactForm = document.getElementById('contact-form');
$contactForm.addEventListener('submit', handleSubmit);

// const inputs = document.getElementById("contact-form").elements;

function handleSubmit(event) {
  event.preventDefault();
  console.log('test');

  const name = $contactForm.elements.name.value;
  const email = $contactForm.elements.email.value;
  const message = $contactForm.elements.message.value;

  const newObj = {
    name,
    email,
    message,
  };
  console.log(newObj);
  document.getElementById('contact-form').reset();
}
