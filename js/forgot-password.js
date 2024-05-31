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
    
    else if(validateEmail !== true) {
      showError('Por favor, insira um endereço de e-mail válido.', 'email-error');
      console.log("Email inválido");
      event.preventDefault();
    }

     else{
      console.log("Deu bom!");
     }
      
  });

  function validateEmail(inputEmail) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(inputEmail);
    if (validateEmail === true) {
      console.log("Email inválido");
    }
    else{
      console.log("Deu bom!");
    }
    }

  