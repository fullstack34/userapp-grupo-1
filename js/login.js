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
    
      elements.loginPage.addEventListener('click', (event) => {
        let senhaLength = elements.inputSenha.value.length;
        let emailLength = elements.inputEmail.value.length;
            
        showEError('', 'email-error'); 
        showSError('', 'senha-error');
    
        if(!emailLength) {
          showEError("Campo obrigatório.", 'email-error');
          event.preventDefault();
        }  
    
        else if(validateEmail(elements.inputEmail.value) !== true) {
          showEError('Por favor, insira um endereço de e-mail válido.', 'email-error');
          console.log("Email inválido");
          event.preventDefault();
        }
    
         if (!senhaLength) {
            showSError("Campo obrigatório.", 'senha-error');
            event.preventDefault();
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
