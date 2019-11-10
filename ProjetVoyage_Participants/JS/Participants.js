/*
Christopher pardo
10.11.2019
Voyage_Participants
*/

document.addEventListener('DOMContentLoaded', init)

var mailto_link = 'mailto:'

function init(){
  Bt_Save.addEventListener("click", FormCheck)
  Bt_Undo.addEventListener("click", FormDel)
  Title_Logo.addEventListener("click", CpnvSite)
  Pht_Carrel.addEventListener("click", IntraCarrel)
  Pht_Benzonana.addEventListener("click", IntraBenzo)
  Bt_Del.addEventListener("click", DelPerson)
  Bt_SendMail.addEventListener("click", SendMail)
  FormFirstName.addEventListener("keyup", Firstname_FirstMaj)
  FormFirstName.addEventListener("keyup", Initials)
  FormFirstName.addEventListener("keyup", FirstName_Mail)
  FormLastName.addEventListener("keyup", Lastname_FirstMaj)
  FormLastName.addEventListener("keyup", Initials)
  FormLastName.addEventListener("keyup", Lastname_Mail)
  SelectClass.addEventListener("change", ClassSelection)
}

function Firstname_FirstMaj(){
  FormFirstName.value = FormFirstName.value.substr(0,1).toUpperCase() +	FormFirstName.value.substr(1,FormFirstName.value.length).toLowerCase()
}

function Lastname_FirstMaj(){
  FormLastName.value = FormLastName.value.substr(0,1).toUpperCase() +	FormLastName.value.substr(1,FormLastName.value.length).toLowerCase()
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
}

function ClassSelection(){
  if(SelectClass.value != "All"){
    lines = document.querySelectorAll('tr')
    lines.forEach(function (trh) {
      if (trh.lastChild.previousSibling.previousSibling.innerText != SelectClass.value){
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

lines = document.querySelectorAll('tr')
lines.forEach(function (trm) {
  if(trm.lastChild.previousSibling.innerText == FormEmail.value){
    alert("Cet utilisateur existe déjà")
    InfoTrue = 1
  }
})

  if(InfoTrue == 0){
    FormSave()
    FormDel()
  }
}

function FirstName_Mail(){
  FormEmail.value = FormFirstName.value + "." + "@cpnv.ch"
}

function Lastname_Mail(){
  FormEmail.value =  FormFirstName.value + "." + FormLastName.value + "@cpnv.ch"
}

function FormDel(){
  FormFirstName.value = ""
  FormLastName.value = ""
  FormInitials.value =""
  FormEmail.value = ""
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

  inp_Check.type = "checkbox"
  td_LastName.innerText = FormLastName.value
  td_FirstName.innerText = FormFirstName.value
  td_Initials.innerText = FormInitials.value
  td_Class.innerText = FormClass.value
  td_Email.innerText = FormEmail.value
  link_Intra.text = "Intranet"
  var pos = FormEmail.value.indexOf("@");
  intra_Name = FormEmail.value.substr(0,pos);
  pos = FormEmail.value.indexOf(".")
  intra_Name = intra_Name.replace('.', '_')
  link_Intra.href = "http://intranet.cpnv.ch/etudiants/" + intra_Name//+ FormFirstName.value + "_" + FormLastName.value

  td_Check.appendChild(inp_Check)
  tr.appendChild(td_Check)
  tr.appendChild(td_LastName)
  tr.appendChild(td_FirstName)
  tr.appendChild(td_Initials)
  tr.appendChild(td_Class)
  tr.appendChild(td_Email)
  td_Intra.appendChild(link_Intra)
  tr.appendChild(td_Intra)
  if(FormClass.value != SelectClass.value && SelectClass.value != "All"){
    tr.hidden = true
  }
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

function SendMail(){
  MailTo_Send = 0
  checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(function (chk) {
    if (chk.checked){
      var email = chk.parentNode.parentNode.lastChild.previousSibling
      mailto_link += email.innerText + ";"
      MailTo_Send = 1

    }
  })
  if(MailTo_Send == 1){
    window = window.open(mailto_link, 'emailWindow')
      email = ""
      mailto_link = 'mailto:'
    }
}
