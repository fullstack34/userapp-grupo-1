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

function testField(inputId,alertId) {
    if (!inputId.value) {
        alertId.classList.remove("oculto")
    } else {
        alertId.classList.add("oculto")
    };
};

formCadastro.addEventListener('submit', function(event) {
    event.preventDefault();
    testField(nomeCad, avisoNome)
    testField(sobrenomeCad, avisoSobrenome)
    testField(emailCad, avisoEmail)
    testField(senhaCad, avisoSenha)
    testField(confirmaSenhaCad, avisoConfirmaSenha)
  });