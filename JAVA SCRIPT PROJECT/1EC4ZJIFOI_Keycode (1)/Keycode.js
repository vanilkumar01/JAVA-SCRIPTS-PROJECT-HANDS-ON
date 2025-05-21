let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function create(key) {
    let List = document.createElement("li");
    List.classList.add("mt-1");
    List.textContent = key;
    keyCodeListEl.appendChild(List);

}

function onKeydown(event) {
    create(event.keyCode);

}

userInputEl.addEventListener("keydown", onKeydown);