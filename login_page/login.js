function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // 임의로 정한 ID와 PW
    const validUsername = 'user123';
    const validPassword = 'pass123';

    // 초기화
    resetValidationMessages();

    if (!username || !password) {
        if (!username) {
            showValidationMessage(usernameInput, 'Username is required.');
        }

        if (!password) {
            showValidationMessage(passwordInput, 'Password is required.');
        }

        return;
    }

    if (username === validUsername && password === validPassword) {
        showToast('Login successful!');
    } else {
        showToast('Invalid username or password.');
    }
}

function showToast(message) {
    alert(message);
}

function showValidationMessage(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
}

function resetValidationMessages() {
    const validationMessages = document.querySelectorAll('.validation-message');
    validationMessages.forEach(message => {
        message.textContent = '';
    });
}

