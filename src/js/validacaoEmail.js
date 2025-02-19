function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        return false; // Impede o envio do formulário
    } else {
        errorMessage.style.display = 'none';
        return true; // Permite o envio do formulário
    }
}