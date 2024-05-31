
/*let cepCad = document.getElementById('cep_cad');
let ruaCad = document.getElementById('rua_cad');
let numeroCad = document.getElementById('numero_cad');
let complementoCad = document.getElementById('complemento');
let bairroCad = document.getElementById('bairro');
let cidadeCad = document.getElementById('cidade');
let ufCad = document.getElementById('uf');
let inputCad = document.getElementById('submit');*/

const validarCampo = document.getElementById('cep_cad');
const validarRua = document.getElementById('rua_cad');
const validarNumero = document.getElementById('numero_cad');
const validarComplemento = document.getElementById('complemento');
const validarBairro = document.getElementById('bairro');
const validarCidade = document.getElementById('cidade');
const validarUf = document.getElementById('uf');
const validarInput = document.getElementById('submit');
const setError = document.getElementById('#msg')

validarInput.addEventListener("click", function (){
    console.log('clicked')

    const cep_cadValue = validarCampo.value;
    const rua_cadValue = validarRua.valeu;
    const numero_cadValue = validarNumero.value;
    const complementoValue = validarComplemento.value;
    const bairroValue = validarBairro.value;
    const cidadeValue = validarCidade.value;
    const ufValue = validarUf.value;

    if(cep_cadValue == '' || rua_cadValue == '' || numero_cadValue == '' || bairroValue == '' || cidadeValue == '' || ufValue == ''){
        setError.textContent = "Campo obrigatório"
        setError.classList  = "error"
    }
})