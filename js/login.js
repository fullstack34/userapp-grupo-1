const elements = {
    inputEmail: document.getElementById('login-email'),
    inputSenha: document.getElementById('password'),
    inputEmailError: document.getElementById('email-error'),
    inputSenhaError: document.getElementById('senha-error'),
    loginPage: document.getElementById('login-page')

}

const showEmailError = (msg) => {
  elements.emailError.textContent = msg;
}
    
const showEError = (msg, elementId) => {
  document.getElementById(elementId).textContent = msg;
}

const showSenhaError = (msg) => {
  elements.senhaError.textContent = msg;
}
    
const showSError = (msg, elementId) => {
  document.getElementById(elementId).textContent = msg;
}

// Lê dados da autenticação salva
let autenticData = window.localStorage.getItem('autentication') ?? '[]';
autenticData = JSON.parse(autenticData);
    
elements.loginPage.addEventListener('click', (event) => {
  let senhaLength = elements.inputSenha.value.length;
  let emailLength = elements.inputEmail.value.length;
  let success = true;

  showEError('', 'email-error'); 
  showSError('', 'senha-error');
    
  if(!emailLength) {
    showEError("Campo obrigatório.", 'email-error');
    event.preventDefault();
    success = false;
  }    
  else if(validateEmail(elements.inputEmail.value) !== true) {
    showEError('Por favor, insira um endereço de e-mail válido.', 'email-error');
    event.preventDefault();
    success = false;
  }
    
  if (!senhaLength) {
    showSError("Campo obrigatório.", 'senha-error');
    event.preventDefault();
    success = false;
  }
  
  if (success && ((elements.inputEmail.value !==  autenticData.email) || (elements.inputSenha.value !==  autenticData.senha))) {
      showEError('Email ou senha inválidos!', 'email-error');
      showSError("Email ou senha inválidos!", 'senha-error');
      event.preventDefault();
      success = false;
  }

  window.localStorage.setItem('logged-in', success);

});
    
function validateEmail(inputEmailString) {
  let emailValido = String(inputEmailString)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (emailValido) {
      return true;
    } else {
      return false;
    };
}
