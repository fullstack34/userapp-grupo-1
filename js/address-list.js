import MenuDashboard from "../js/menu-dashboard.js";

document.getElementById("navArea").innerHTML = MenuDashboard();

// Lê a lista de endereços existente
let addressStorageList = window.localStorage.getItem('address-list') ?? '[]';
addressStorageList = JSON.parse(addressStorageList);

let addressHtmlList = document.getElementById('address-html-list');

const addTaskHtml = (value) => {

    let tr = document.createElement('tr');
  
    // Inclui, na tag tr, os campos trazidos do LocalStorage
    for (const property in value) {
      let td = document.createElement('td');
      td.textContent = value[property];
      tr.append(td);
    }

    // Inclui, na tag tr, os botões de Editar e Excluir
    let tdbutton = document.createElement('td');
    tdbutton.classList.add("btn.acoes");

    let buttonEdit = document.createElement('button');
    buttonEdit.textContent = "Editar";
    tdbutton.append(buttonEdit);

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = "Excluir";
    tdbutton.append(buttonDelete);

    tr.append(tdbutton);

    // Adiciona a tag tr à lista de endereços no HTML
    addressHtmlList.append(tr);
  }

for (const address of addressStorageList) {
    addTaskHtml(address);
};
