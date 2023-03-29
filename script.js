const confirmPassword = document.querySelector('#confirm_password');
const password = document.querySelector('#password');
const passwordError = document.querySelector(".form-element p");



confirmPassword.addEventListener('input', () => {
  if(confirmPassword.value !== password.value) {
    confirmPassword.classList.add('invalid');
    password.classList.add('invalid');
    passwordError.textContent = "Passwords do not match";
    
  }
  else {
    passwordError.textContent = '';
    confirmPassword.classList.remove('invalid');
    password.classList.remove('invalid');
  }
})