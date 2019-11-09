/*
Christopher pardo
09.11.2019
Voyage_Participants
*/

document.addEventListener('DOMContentLoaded', init)

var nb_line = 0
var mailto_link = 'mailto:'

function init(){
  Bt_Save.addEventListener("click", FormCheck)
  Bt_Undo.addEventListener("click", FormDel)
  Title_Logo.addEventListener("click", CpnvSite)
  Pht_Carrel.addEventListener("click", IntraCarrel)
  Pht_Benzonana.addEventListener("click", IntraBenzo)
  Bt_Del.addEventListener("click", DelPerson)
  Bt_SendMail.addEventListener("click", SendMail)
  FormFirstName.addEventListener("keyup", Initials)
  FormLastName.addEventListener("keyup", Initials)
  SelectClass.addEventListener("change", ClassSelection)
  /*Bts_Edit = document.getElementsByClassName("Bt_Edit")
  Bts_Edit.addEventListener("click", Edit_Form)
  Attente de la réponse de Carrel*/
}

function CpnvSite(){
  document.location.href="https://www.cpnv.ch/"
}

function IntraCarrel() {
  document.location.href="http://intranet.cpnv.ch/maitres_principaux/xcl"
}

function IntraBenzo() {
  document.location.href="http://intranet.cpnv.ch/enseignants/pba"
}

function Initials() {
    var ini = FormFirstName.value.substr(0,1)
    ini += FormLastName.value.substr(0,1)
    ini += FormLastName.value.substr(FormLastName.value.length -1, 1)
    FormInitials.value = ini.toUpperCase()

    /*var pos = name6.value.indexOf(" ");
    if(pos != -1) {
        ini += name6.value.substr(pos + 1, 1);
    }
    var longueur = name6.value.length;
    if (name6.value.indexOf(" ") != -1 && name6.value.substr(longueur -1, 1) != name6.value.substr(pos + 1, 1)){
        ini += name6.value.substr(longueur -1, 1);
    }

    initiales6.value = ini.toUpperCase();*/
}

function ClassSelection(){
  if(SelectClass.value != "All"){
    lines = document.querySelectorAll('tr')
    lines.forEach(function (trh) {
      if (trh.lastChild.previousSibling.previousSibling.previousSibling.innerText != SelectClass.value){
        trh.hidden = true
      }
      else {
        trh.hidden = false
      }
    })
  }
  else {
    lines = document.querySelectorAll('tr')
    lines.forEach(function (trh) {
    trh.hidden = false
    })
  }
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

  if(FormInitials.value.length != 3){
    FormInitials.classList.add("InfoWrong")
    InfoTrue = 1
  }
  else{
    FormInitials.classList.remove("InfoWrong")
  }

  var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if(!regex.test(FormEmail.value)){
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
    FormDel()
  }
}

function FormDel(){
  FormFirstName.value = ""
  FormLastName.value = ""
  FormInitials.value =""
  FormEmail.value = "@cpnv.ch"
  FormClass.value = "..."

  FormFirstName.classList.remove("InfoWrong")
  FormLastName.classList.remove("InfoWrong")
  FormInitials.classList.remove("InfoWrong")
  FormEmail.classList.remove("InfoWrong")
  FormClass.classList.remove("InfoWrong")
}

function FormSave(){
  tr = document.createElement("tr")
  td_Check = document.createElement("td")
  inp_Check = document.createElement("input")
  td_LastName = document.createElement("td")
  td_FirstName = document.createElement("td")
  td_Initials = document.createElement("td")
  td_Class = document.createElement("td")
  td_Email = document.createElement("td")
  td_Intra = document.createElement("td")
  icone_Intra = document.createElement("span")
  link_Intra = document.createElement("a")
  td_Edit = document.createElement("td")
  icone_Edit = document.createElement("span")

  inp_Check.type = "checkbox"
  td_LastName.innerText = FormLastName.value
  td_FirstName.innerText = FormFirstName.value
  td_Initials.innerText = FormInitials.value
  td_Class.innerText = FormClass.value
  td_Email.innerText = FormEmail.value
  link_Intra.text = "☞"
  //intra_Name =
  link_Intra.href = "http://intranet.cpnv.ch/etudiants/" + FormFirstName.value + "_" + FormLastName.value
  icone_Edit.classList.add("glyphicon")
  icone_Edit.classList.add("glyphicon-pencil")

  td_Email.id = "Mail"

  td_Edit.id = "Edit_" + FormInitials.value
  td_Edit.classList.add("Bt_Intra")

  td_Edit.id = "Edit_" + FormInitials.value
  td_Edit.classList.add("Bt_Edit")

  td_Check.appendChild(inp_Check)
  tr.appendChild(td_Check)
  tr.appendChild(td_LastName)
  tr.appendChild(td_FirstName)
  tr.appendChild(td_Initials)
  tr.appendChild(td_Class)
  tr.appendChild(td_Email)
  td_Intra.appendChild(link_Intra)
  tr.appendChild(td_Intra)
  td_Edit.appendChild(icone_Edit)
  tr.appendChild(td_Edit)
  InfoTable.appendChild(tr)
}
/*function FormSave(){
  tr = document.createElement("tr")
  a = document.createElement("a")
  a.text = FormLastName.value
  a.href = "http://intranet.cpnv.ch/etudiants/" + FormFirstName.value +"_"+ FormLastName.value
  td1 = document.createElement("td")
  td1.appendChild(a)
  td2 = document.createElement("td")
  td2.innerText = FormFirstName.value
  td3 = document.createElement("td")
  chk3 = document.createElement("input")
  chk3.type = "checkbox"
  tr.appendChild(td3)
  td3.appendChild(chk3)
  tr.appendChild(td1)
  tr.appendChild(td2)
  InfoTable.appendChild(tr)
}*/

function Edit_Form(){
  alert("test")
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

function SendMail(){
  checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(function (chk) {
    if (chk.checked){
      var email = chk.parentNode.parentNode.lastChild.previousSibling.previousSibling
      mailto_link += email.innerText + ";"

    }
  })
  window = window.open(mailto_link, 'emailWindow')
  if (window && window.open && !window.closed){
      window.close()
  }
  email = ""
  mailto_link = 'mailto:'
}
/*
button = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
td = button.parentNode  // td est la cellule dans laquelle le bouton se trouve
tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
table = tr.parentNode   // table est la table dans laquelle la ligne se trouve
table.removeChild(tr)   // On enlève la ligne de la table
 */
