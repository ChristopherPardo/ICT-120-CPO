/*
    Christopher Pardo
    Exa120
    15.11.2019
*/

document.addEventListener('DOMContentLoaded', init)

verifFistName = false // Verify the First Name
verifLastName = false // Verify the Last Name
verifPw1 = false // Verify the Password
verifPw2 = false // Verify the verification of the Password

function init(){
    TxtFirstName.addEventListener("keyup", FirstNameVerif)
    TxtLastName.addEventListener("keyup", LastNameVerif)
    Pw1.addEventListener("keyup", Pw1Verif)
    Pw2.addEventListener("keyup", Pw2Verif)
    VerifEreas()
}

function VerifEreas() {
    //Verify if all the tests are OK
    if (verifFistName == true && verifLastName == true && verifPw1 == true && verifPw2 == true){
        BtnSend.disabled = false
    }
    else{
        BtnSend.disabled = true
    }
}

function FirstNameVerif(){
    //Verify if the test is OK
    if(TxtFirstName.value.length < 2){
        verifFistName = false
        ErrorFirstName.hidden = false
    }
    else{
        verifFistName = true
        ErrorFirstName.hidden = true
    }
    VerifEreas()
}

function LastNameVerif() {
    //Verify if the test is OK
    if(TxtLastName.value.length < 2){
        verifLastName = false
        ErrorLastName.hidden = false
    }
    else{
        verifLastName = true
        ErrorLastName.hidden = true
    }
    VerifEreas()
}

function Pw1Verif() {
    //Verify if the test is OK
    if(Pw1.value.length < 6){
        verifPw1 = false
        ErrorPw1.hidden = false
    }
    else{
        verifPw1 = true
        ErrorPw1.hidden = true
    }
    VerifEreas()
}

function Pw2Verif() {
    if(Pw2.value != Pw1.value){
        verifPw2 = false
        ErrorPw2.hidden = false
    }
    else{
        verifPw2 = true
        ErrorPw2.hidden = true
    }
    VerifEreas()
}