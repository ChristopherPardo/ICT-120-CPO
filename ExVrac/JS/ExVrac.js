document.addEventListener("DOMContentLoaded",init);

function Ex1() {
    div1.classList.add("div1")
}

function init() {
    div1.addEventListener("click", Ex1);
}