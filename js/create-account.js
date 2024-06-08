// Identifica os elementos da tela
let formCadastro = document.getElementById("form_cadastro");
let nomeCad = document.getElementById('nome_cad');
let sobrenomeCad = document.getElementById('sobrenome_cad');
let emailCad = document.getElementById('email_cad');
let senhaCad = document.getElementById('senha_cad');
let confirmaSenhaCad = document.getElementById('confirma_senha_cad');
let avisoNome = document.getElementById("aviso_nome");
let avisoSobrenome = document.getElementById("aviso_sobrenome");
let avisoEmail = document.getElementById("aviso_email");
let avisoSenha = document.getElementById("aviso_senha");
let avisoConfirmaSenha = document.getElementById("aviso_confirma_senha");

const div = document.querySelector('div'); 
console.log(div.firstElementChild.nextElementSibling);

// Realiza a validação do email
function validateEmail(inputId,alertId){  
    let emailValido = String(inputId.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (emailValido) {
        alertId.innerHTML = "";
        return true;
    } else {
        alertId.innerHTML = "Por favor, insira um endereço de e-mail válido";
        return false;
    };
  };

function testFieldEmpty(inputId,alertId) {
    if (!inputId.value) {
        alertId.innerHTML = "Campo obrigatório";
        return false;
    } else {
        alertId.innerHTML = "";
        return true;
    };
};

formCadastro.addEventListener('submit', function(event) {
    success = true;
    success = testFieldEmpty(nomeCad, avisoNome) && success;
    success = testFieldEmpty(sobrenomeCad, avisoSobrenome) && success;
    if (emailCad.value) {
        success = validateEmail(emailCad,avisoEmail) && success;
    } else {
        avisoEmail.innerHTML = "Campo obrigatório";
        success = false;
    };
    success = testFieldEmpty(senhaCad, avisoSenha) && success;
    if (!confirmaSenhaCad.value) {
        avisoConfirmaSenha.innerHTML = "Campo obrigatório";
        success = false;
    } else if (senhaCad.value && senhaCad.value !== confirmaSenhaCad.value) {
            avisoConfirmaSenha.innerHTML = "As senhas não coincidem";
            success = false;
    } else {
            avisoConfirmaSenha.innerHTML = "";
    };
    if(!success) {
        event.preventDefault();
    } else {
        let userInfo = {
            "nome": nomeCad.value,
            "sobrenome": sobrenomeCad.value,
            "email": emailCad.value,
            "senha": senhaCad.value
        };
        window.localStorage.setItem('autentication', JSON.stringify(userInfo));
    };
  });