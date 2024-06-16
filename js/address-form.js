import MenuDashboard from "../js/menu-dashboard.js";

document.getElementById("navArea").innerHTML = MenuDashboard();

const form = document.getElementById('form');
const camp = document.querySelectorAll('.required');
const complemento = document.getElementById('complemento');
const span = document.querySelectorAll('#msg');
const validarInput = document.getElementById('submit')

validarInput.addEventListener('click', (event) => {
    let success = true;
    success = validarCep() && success;
    success = validarRua() && success;
    success = validarNumero() && success;
    success = validarBairro() && success;
    success = validarCidade() && success;
    success = validarUf() && success;
    if(!success) {
        event.preventDefault();
    } else {
        event.preventDefault();
        let addressInfo = {
            "cep": camp[0].value,
            "rua": camp[1].value,
            "numero": camp[2].value,
            "complemento": complemento.value,
            "bairro": camp[3].value,
            "cidade": camp[4].value,
            "uf": camp[5].value,
        };
        window.localStorage.setItem('address-'+Date.now(), JSON.stringify(addressInfo));
        for (let i=0;i<=5;i++) {
            camp[i].value = null;
        }
        complemento.value = null;
        alert("Endereço cadastrado com sucesso!");
    };

});

function setError(index){
    camp[index].style.border = '1px solid #e63636';
    span[index].style.display = 'block'
}

function removeError(index){
    camp[index].style.border = '';
    span[index].style.display = 'none'
}

function validarCep(){
    if(camp[0].value.length < 8) {
        setError(0);
        return false;
    }
    else{
        removeError(0);
        camp[0].value = zipCodeMask(camp[0].value);
        return true;
    } 
}

function validarRua(){
    if(camp[1].value.length < 2) {
        setError(1);
        return false;
    }    
    else{
        removeError(1);
        return true;
    }
}

function validarNumero(){
    if(camp[2].value.length < 2) {
        setError(2);
        return false;
    } 
    else{
        removeError(2);
        return true;
    }
}

function validarBairro(){
    if(camp[3].value.length < 2) {
        setError(3);
        return false;
    }         
    else{
        removeError(3);
        return true;
    }
}

function validarCidade(){
    if(camp[4].value.length < 2) {
        setError(4);
        return false;
    }   
    else{
        removeError(4);
        return true;
    }
}

function validarUf(){
    if(camp[5].value.length < 2) {
        setError(5);
        return false;
    }             
    else{
        removeError(5);
        return true;
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

