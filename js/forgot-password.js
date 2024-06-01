const elements = {
inputEmail: document.getElementById('input-email'),
formRecover: document.getElementById('form-recover'),
inputError: document.getElementById('email-error')
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
  
    if(!emailLength) {
      showError("Campo obrigatório.", 'email-error');
      // showEmailError("Email é um campo obrigatorio");
      // emailError.textContent = "Email é um campo obrigatorio"
      event.preventDefault();
    } 
    
    else if(validateEmail(elements.inputEmail.value) !== true) {
      showError('Por favor, insira um endereço de e-mail válido.', 'email-error');
      console.log("Email inválido");
      event.preventDefault();
    }

     else{
      console.log("Deu bom!");
     }
      
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