/*
    Christopher Pardo
    Exa120
    15.11.2019
*/

document.addEventListener('DOMContentLoaded', init)


    function init(){
        NameIni()
        AreaMoti.addEventListener("keypress", AreaMotiVerif)
        AreaMoti.addEventListener("keyup", AreaMotiVerif)
}

function NameIni(){
    info = window.location.search

    pos1 = info.indexOf("=") + 1
    pos2 = info.indexOf("&")
    infoFirstName = info.substring(pos1)
    infoFirstName = infoFirstName.substring(0,pos2 - pos1)

    pos = info.indexOf("=",pos1) + 1
    infoLastName = info.substring(pos)

    SpanFistName.innerHTML = infoFirstName
    SpanLastName.innerHTML = infoLastName
}

function AreaMotiVerif() {
    if (AreaMoti.value.length < 30){
        ErrorMoti.hidden = false
        BtnSendMoti.disabled = true
    }
    else{
        ErrorMoti.hidden = true
        BtnSendMoti.disabled = false
    }

    if (AreaMoti.value.length > 40){
       // str.substring(0, str.length() - 1)
        AreaMoti.value.length -= 1
            //AreaMoti.value.substring(0,  AreaMoti.value.length() -1);
    }

    SizeMotiremaining.innerHTML = 144 - AreaMoti.value.length
}