document.addEventListener('DOMContentLoaded', init)

var nb_line = 0

function init(){
  Bt_Save.addEventListener("click", FormCheck)
  //Bt_Save.addEventListener("click", FormSave)
  Bt_Del.addEventListener("click", DelPerson)
}

function FormCheck(){
  var InfoTrue = true
  if(FormFirstName.value.length == 0){
    FormFirstName.classList.add("InfoWrong")
    InfoTrue = false
  }
  if(FormLastName.value.length == 0){
    FormLastName.classList.add("InfoWrong")
    InfoTrue = false
  }
  if(FormEmail)

}

function FormSave(){
  alert("Start FormSave");
  nb_line++
  tr = document.createElement("tr")
  tr.id = "line" + nb_line
  a = document.createElement("a")
  a.text = FormLastName.value
  a.href = "http://intranet.cpnv.ch/etudiants/" + FormFirstName.value +"_"+ FormLastName.value
  td1 = document.createElement("td")
  //td1.innerText =
  td1.appendChild(a)
  td2 = document.createElement("td")
  td2.innerText = FormFirstName.value
  td3 = document.createElement("td")
  chk3 = document.createElement("input")
  chk3.id = "check" + nb_line
  chk3.type = "checkbox"
  tr.appendChild(td3)
  td3.appendChild(chk3)
  tr.appendChild(td1)
  tr.appendChild(td2)
  InfoTable.appendChild(tr)
}

function DelPerson() {
  for (var i = 1; i <= nb_line; i++) {
    if (document.getElementById("check" + i).checked){
    //ne fonctionne pas  document.getElementById("tr"+i).remove
    }
  }
}
/*
button = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
td = button.parentNode  // td est la cellule dans laquelle le bouton se trouve
tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
table.removeChild(tr)   // On enlève la ligne de la table
 */
