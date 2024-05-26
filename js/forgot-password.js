const elements = {
inputEmail: document.getElementById('input-email'),
formRecover: document.getElementById('form-recover')
}

const showEmailError = (msg) => {
    elements.emailError.textContent = msg;
}

const showError = (msg, elementId) => {
    document.getElementById(elementId).textContent = msg;
  }

  elements.formRecover.addEventListener('submit', (event) => {

    let emailLength = elements.inputEmail.value.length;
      
    showError('', 'email-error');
    // emailError.textContent = '';
    
  
    if(!emailLength) {
      showError("Campo obrigatório.", 'email-error');
      // showEmailError("Email é um campo obrigatorio");
      // emailError.textContent = "Email é um campo obrigatorio"
      event.preventDefault();
    } else if(emailLength < 3) {
      showError('Por favor, insira um endereço de e-mail válido.', 'email-error');
    }
      
  });