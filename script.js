document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let valid = true;
      
      // Clear previous error messages
      document.querySelectorAll('.invalid-feedback').forEach(el => el.innerText = '');
      document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));
      
      // Full Name validation
      const fullName = form.fullName.value.trim();
      if (fullName.length < 5) {
        valid = false;
        const error = document.getElementById('fullNameError');
        error.innerText = 'Name must be at least 5 characters long.';
        form.fullName.classList.add('is-invalid');
      }
      
      // Email validation
      const email = form.email.value.trim();
      if (!email.includes('@')) {
        valid = false;
        const error = document.getElementById('emailError');
        error.innerText = 'Please enter a valid email address.';
        form.email.classList.add('is-invalid');
      }
      
      // Phone Number validation
      const phone = form.phone.value.trim();
      if (phone.length !== 10 || phone === '1234567890') {
        valid = false;
        const error = document.getElementById('phoneError');
        error.innerText = 'Please enter a valid 10-digit phone number.';
        form.phone.classList.add('is-invalid');
      }
      
      // Password validation
      const password = form.password.value.trim();
      if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
        valid = false;
        const error = document.getElementById('passwordError');
        error.innerText = 'Password must be at least 8 characters long and cannot be "password" or your name.';
        form.password.classList.add('is-invalid');
      }
      
      // Confirm Password validation
      const confirmPassword = form.confirmPassword.value.trim();
      if (confirmPassword !== password) {
        valid = false;
        const error = document.getElementById('confirmPasswordError');
        error.innerText = 'Passwords do not match.';
        form.confirmPassword.classList.add('is-invalid');
      }
      
      // If the form is valid, submit it
      if (valid) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });
  });
  