// Mobile Navigation 
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close mobile menu 
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Client-Side Form 
const contactForm = document.getElementById('contactForm');

const formSuccess = document.getElementById('formSuccess')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Get form fields

  const name = document.getElementById('name');
  const email = document.getElementById('email');

  const projectType = document.getElementById('projectType');
  const message = document.getElementById('message');

  // Reset 
  //  errors
  clearError(name);
  clearError(email);
  clearError(projectType);

  clearError(message);
  formSuccess.style.display = 'none';

  // Validate 
  if (name.value.trim() === '') {

    showError(name, 'Name is required.');
    isValid = false;
  }

  // Validate Email
  if (email.value.trim() === '') {
    showError(email, 'Email address is required.');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, 'Please enter a valid email address.');
    isValid = false;
  }

  // Validate Project card

  if (projectType.value === '') {
    showError(projectType, 'Please select a package.');
    isValid = false;
  }


  // Message
  if (message.value.trim() === '') {
    showError(message, 'Please provide some project details.');
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, 'Please provide at least 10 characters.');
    isValid = false;
  }

  // If valid, show success state
  if (isValid) {
    formSuccess.style.display = 'block';
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 5000);
  }
});

function showError(inputElement, message) {
  const formGroup = inputElement.parentElement;
  formGroup.classList.add('error');
  const errorSmall = formGroup.querySelector('.error-message');
  errorSmall.innerText = message;
}

function clearError(inputElement) {
  const formGroup = inputElement.parentElement;
  formGroup.classList.remove('error');
  const errorSmall = formGroup.querySelector('.error-message');
  errorSmall.innerText = '';
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
