const form = document.querySelector('#form');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');
const showPassword = document.querySelector('#show-password');

let isValid = false; // the default value is false
let passwordMatch = false; // using 'let' not 'const' because the passwordMatch can change to 'true'


const validateForm = () => {
    // Using constraint API
    isValid = form.checkValidity();
    // Style main message for error
    if (!isValid) {
        message.textContent = 'すべての箇所に記入してください。';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return; // breakout at this part if form is invalid(no further execution needed)
    }
    // Check to see if passwords match
    if (password1.value === password2.value) {
        passwordMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    }else {
        passwordMatch = false;
        message.textContent = 'パスワードを再確認してください。';
        message.style.color = 'red';
        messageContainer.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return; // breakout at this part if passwords don't match
    }
    // If form is valid and passwords match
    if (isValid && passwordMatch) {
        message.textContent = '登録完了！';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data
    console.log(user);
}

// Event listener
const processedFormData = (e) => {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit data (only if the form is valid and passwords match)
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

form.addEventListener('submit', processedFormData);

// Password showed when click on the checkbox
const checked = () => {
    if (showPassword.checked === true) {
        password1.type = "text";
    } else {
        password1.type = "password";
    }
}

showPassword.addEventListener('click', checked)
    
        
   
