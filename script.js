function changeLabelStyle(inputElement) {
  const label = inputElement.nextElementSibling;
  const message = inputElement.nextElementSibling.nextElementSibling;

  if (inputElement.value.trim() !== '' && label.classList.contains('error')) {
    label.classList.remove('error');
    inputElement.classList.remove('error');

    message.style.display = 'none';
  }

  if (
    inputElement.value.trim() !== '' ||
    document.activeElement === inputElement
  ) {
    label.classList.add('focus');
    inputElement.classList.add('focus');
    inputElement.setAttribute(
      'placeholder',
      inputElement.getAttribute('placeholder')
    );
  } else {
    label.classList.add('error');
    inputElement.classList.add('error');
    inputElement.setAttribute(
      'placeholder',
      inputElement.getAttribute('placeholder')
    );
    message.style.display = 'block';
  }
}

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const gender = formData.get('gender');
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const email = formData.get('email');
    const phone = formData.get('phone');

    console.log('Gender:', gender);
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Email:', email);
    console.log('Phone:', phone);

    event.target.reset();

    alert('Form submitted successfully!');
  });
