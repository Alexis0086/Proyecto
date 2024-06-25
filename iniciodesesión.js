// Obtener referencias a los elementos del DOM
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const formTitle = document.getElementById('formTitle');

const registerLink = document.getElementById('registerLink');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const backToLoginLink = document.getElementById('backToLoginLink');
const backToLoginLink2 = document.getElementById('backToLoginLink2');

const continueResetPassword = document.getElementById('continueResetPassword');
const verificationCodeBox = document.getElementById('verificationCodeBox');
const resetPasswordButton = document.getElementById('resetPasswordButton');

// Función para mostrar el formulario de registro
function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    forgotPasswordForm.style.display = 'none';
    formTitle.textContent = 'Registro';
}

// Función para mostrar el formulario de recuperación de contraseña
function showForgotPasswordForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    forgotPasswordForm.style.display = 'flex';
    verificationCodeBox.style.display = 'none';
    resetPasswordButton.style.display = 'none';
    formTitle.textContent = 'Recuperar Contraseña';
}

// Función para volver al formulario de inicio de sesión
function showLoginForm() {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    formTitle.textContent = 'Inicia Sesión';
}

// Función para mostrar el campo de código de verificación
function showVerificationCode() {
    verificationCodeBox.style.display = 'block';
    resetPasswordButton.style.display = 'block';
    continueResetPassword.style.display = 'none';
}

// Asignar eventos a los enlaces
registerLink.addEventListener('click', showRegisterForm);
forgotPasswordLink.addEventListener('click', showForgotPasswordForm);
backToLoginLink.addEventListener('click', showLoginForm);
backToLoginLink2.addEventListener('click', showLoginForm);
continueResetPassword.addEventListener('click', showVerificationCode);