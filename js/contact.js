document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  const formMessage = document.querySelector('.form-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showFormMessage('Please fill all required fields.', 'error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate form submission (no backend)
    showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
    form.reset();
  });

  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    setTimeout(() => {
      formMessage.style.display = 'none';
    }, 5000);
  }
});