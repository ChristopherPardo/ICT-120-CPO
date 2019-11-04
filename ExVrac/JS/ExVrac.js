document.addEventListener("DOMContentLoaded",init);

function Ex1() {
    div1.classList.add("div1");
}
function Ex2() {
    div1.classList.remove("div1");
}
function Ex3Over() {
    div3.classList.add("div3");
}
function Ex3Leave() {
    div3.classList.remove("div3");
}
function Ex4() {
    if((div4bt1.checked == true) && (div4bt2.checked == true)){
        document.getElementById("div4").innerHTML = "YES";
        div4.classList.add("div4");
    }
}
function Ex5() {
    document.getElementById("div52").remove();
}
function Ex6() {
    var ini = name6.value.substr(0,1);
    var pos = name6.value.indexOf(" ");
    if(pos != -1) {
        ini += name6.value.substr(pos + 1, 1);
    }
    var longueur = name6.value.length;
    if (name6.value.indexOf(" ") != -1 && name6.value.substr(longueur -1, 1) != name6.value.substr(pos + 1, 1)){
        ini += name6.value.substr(longueur -1, 1);
    }

    initiales6.value = ini.toUpperCase();
}
function Ex7AVosM() {
    AVosM.disabled = true;
    Pret.disabled = false;
    Partez.disabled = true;
    img7.src = "img/marks.png";
}
function Ex7Pret() {
    AVosM.hidden = true;
    Pret.disabled = true;
    Partez.disabled = false;
    Partez.hidden = false;
    img7.src = "img/set.png";
}
function Ex7Partez() {
    Pret.hidden = true;
    Partez.disabled = true;
    img7.src = "img/go.png";
    setTimeout(Ex7Fin,3000);
}
function Ex7Fin() {
    img7.src = "img/empty.png";
    AVosM.hidden = false;
    AVosM.disabled = false;
    Pret.hidden = false;
    Partez.hidden = true;
}


function init() {
    div1.addEventListener("click", Ex1);
    div2.addEventListener("click", Ex2);
    div3.addEventListener("mouseover", Ex3Over);
    div3.addEventListener("mouseleave", Ex3Leave);
    div4bt1.addEventListener("click", Ex4);
    div4bt2.addEventListener("click", Ex4);
    div51.addEventListener("click", Ex5);
    name6.addEventListener("keyup", Ex6);
    AVosM.addEventListener("click", Ex7AVosM);
    Pret.addEventListener("click", Ex7Pret);
    Partez.addEventListener("click", Ex7Partez);
}
