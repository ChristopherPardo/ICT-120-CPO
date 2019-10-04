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
function Ex3OLeave() {
    div3.classList.remove("div3");
}
function Ex4() {
    if((div4bt1.checked == true) && (div4bt2.checked == true)){
        document.getElementById("div4").innerHTML = "YES";
        div4.classList.add("div4");
    }
}



function init() {
    div1.addEventListener("click", Ex1);
    div2.addEventListener("click", Ex2);
    div3.addEventListener("mouseover", Ex3Over);
    div3.addEventListener("mouseleave", Ex3OLeave)
    div4bt1.addEventListener("click", Ex4);
    div4bt2.addEventListener("click", Ex4);
}