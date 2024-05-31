const elements = {
    inputEmail: document.getElementById('login-email'),
    inputSenha: document.getElementById('password'),
    inputEmailError: document.getElementById('email-error'),
    inputSenhaError: document.getElementById('senha-error')
    }

    const showEmailError = (msg) => {
        elements.emailError.textContent = msg;
    }
    
    const showEError = (msg, elementId) => {
        document.getElementById(elementId).textContent = msg;
      }

    const showSenhaError = (msg) => {
        elements.emailError.textContent = msg;
    }
    
    const showSError = (msg, elementId) => {
        document.getElementById(elementId).textContent = msg;
      }
      
    
    