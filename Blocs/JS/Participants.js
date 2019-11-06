document.addEventListener('DOMContentLoaded', init)

function init(){
  Bt_Save.addEventListener("click", FormSave);
}

function FormSave(){
  alert("Start FormSave");
  tr = document.createElement("tr")
  td1 = document.createElement("td")
  td1.innerText = FormFirstName.value
  td2 = document.createElement("td")
  td2.innerText = FormLastName.value
  //tr.appendChild() trouver comment ajouter une checkbox dans le bableau InfoTable
  tr.appendChild(td1)
  tr.appendChild(td2)
  InfoTable.appendChild(tr)
}
