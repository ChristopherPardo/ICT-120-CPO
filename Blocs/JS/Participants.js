document.addEventListener('DOMContentLoaded', init)

var nb_line = 0

function init(){
  Bt_Save.addEventListener("click", FormCheck)
  Pht_Carrel.addEventListener("click", IntraCarrel)
  Pht_Benzonana.addEventListener("click", IntraBenzo)
  Bt_Del.addEventListener("click", DelPerson)
}

function IntraCarrel() {
  document.location.href="http://intranet.cpnv.ch/maitres_principaux/xcl"
}

function IntraBenzo() {
  document.location.href="http://intranet.cpnv.ch/enseignants/pba"
}

function FormCheck(){
  var InfoTrue = 0
  if(FormFirstName.value.length == 0){
    FormFirstName.classList.add("InfoWrong")
    InfoTrue = 1
  }
  else{
    FormFirstName.classList.remove("InfoWrong")
  }

  if(FormLastName.value.length == 0){
    FormLastName.classList.add("InfoWrong")
    InfoTrue = 1
  }
  else{
    FormLastName.classList.remove("InfoWrong")
  }

  if(FormEmail.value.length < 9){
    FormEmail.classList.add("InfoWrong")
    InfoTrue = 1
  }
  else{
    FormEmail.classList.remove("InfoWrong")
  }

  if(FormClass.value == "..."){
    FormClass.classList.add("InfoWrong")
    InfoTrue = 1
  }
  else{
    FormClass.classList.remove("InfoWrong")
  }

  if(InfoTrue == 0){
    FormSave()
    FormFirstName.value = ""
    FormLastName.value = ""
    FormEmail.value = "@cpnv.ch"
    FormClass.value = "..."
  }

}

function FormSave(){
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
  checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(function (chk) {
    if (chk.checked){
      tr = chk.parentNode.parentNode
      tr.parentNode.removeChild(tr)
    }
  })
}
/*
button = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
td = button.parentNode  // td est la cellule dans laquelle le bouton se trouve
tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
table.removeChild(tr)   // On enlève la ligne de la table
 */
