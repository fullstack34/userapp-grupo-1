import MenuDashboard from "../js/menu-dashboard.js";

document.getElementById("navArea").innerHTML = MenuDashboard();

/*const form = document.getElementById('form_address')
const validarCampo = document.getElementById('cep_cad');
const validarRua = document.getElementById('rua_cad');
const validarNumero = document.getElementById('numero_cad');
const validarBairro = document.getElementById('bairro');
const validarCidade = document.getElementById('cidade');
const validarUf = document.getElementById('uf');
const setError = document.querySelectorAll('#msg')
const validarInput = document.getElementById('submit');


validarInput.addEventListener("click", function (){
    console.log('clicked')


    const cep_cadValue = validarCampo.value;
    const rua_cadValue = validarRua.valeu;
    const numero_cadValue = validarNumero.value;
    const bairroValue = validarBairro.value;
    const cidadeValue = validarCidade.value;
    const ufValue = validarUf.value;

    if(cep_cadValue == '' || rua_cadValue == '' || numero_cadValue == '' || bairroValue == '' || cidadeValue == '' || ufValue == ''){
      setError.textContent = 'Campo Obrigatório';
    }
}); */

const form = document.getElementById('form');
const camp = document.querySelectorAll('.required');
const span = document.querySelectorAll('#msg');
const validarInput = document.getElementById('submit')

validarInput.addEventListener('click', (event) => {
 event.preventDefault();
 validarCampo();
 validarRua();
 validarNumero();
 validarBairro();
 validarCidade();
 validarUf();

});

function setError(index){
    camp[index].style.border = '1px solid #e63636';
    span[index].style.display = 'block'
}

function removeError(index){
    camp[index].style.border = '';
    span[index].style.display = 'none'
}

function validarCampo(){
    if(camp[0].value.length < 8) {
        setError(0)
    }

    else{
        removeError(0)
    } 

}

function validarRua(){
    if(camp[1].value.length < 2) {
        setError(1)
    }
    
    else{
        removeError(1)
    }
}


function validarNumero(){
    if(camp[2].value.length < 2) {
        setError(2)
    }
        
    else{
        removeError(2)
    }
}

function validarBairro(){
    if(camp[3].value.length < 2) {
        setError(3)
    }
            
    else{
        removeError(3)
    }
}

function validarCidade(){
    if(camp[4].value.length < 2) {
        setError(4)
    }
                
    else{
    removeError(4)
    }
}

function validarUf(){
    if(camp[5].value.length < 2) {
        setError(5)
    }
                
    else{
    removeError(5)
    }
}

const handleZipCode = (event) => {
    let input = event.target
    input.value = zipCodeMask(input.value)
  }
  
  const zipCodeMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{5})(\d)/,'$1-$2')
    return value
  }

