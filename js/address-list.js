import MenuDashboard from "../js/menu-dashboard.js";

document.getElementById("navArea").innerHTML = MenuDashboard();

// Lê a lista de endereços existente
let addressStorageList = window.localStorage.getItem('address-list') ?? '[]';
addressStorageList = JSON.parse(addressStorageList);

let addressHtmlList = document.getElementById('address-html-list');


const addTaskHtml = (value) => {

    let tr = document.createElement('tr');
    
    // Inclui o ID na tabela
    let tdid = document.createElement('td');
    tdid.textContent = (Math.random() * 1000000).toFixed();
    tr.append(tdid);

    // Inclui os campos trazidos do LocalStorage
    for (const property in value) {
      let td = document.createElement('td');
      td.textContent = value[property];
      tr.append(td);
    }

    // Inclui os botões de Editar e Excluir
    let tdbutton = document.createElement('td');
    tdbutton.classList.add("btn.acoes");

    let buttonEdit = document.createElement('button');
    buttonEdit.textContent = "Editar";
    tdbutton.append(buttonEdit);

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = "Excluir";
    tdbutton.append(buttonDelete);

    tr.append(tdbutton);

    // Adiciona à lista de endereços no HTML
    addressHtmlList.append(tr);
  }

// Montar um loop para inserir, em tbody, tantas tags tr (com uma td para cada coluna) quantos sejam os endereços

for (const address of addressStorageList) {
    addTaskHtml(address);
};
