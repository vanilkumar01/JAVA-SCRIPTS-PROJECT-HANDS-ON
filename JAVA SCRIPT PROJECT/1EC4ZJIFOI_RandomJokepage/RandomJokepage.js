let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function randomjoke() {
    spinnerEl.classList.toggle("d-none");
    jokeText.classList.toggle("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let random = jsonData.value;
            spinnerEl.classList.toggle("d-none");
            jokeText.classList.toggle("d-none");
            jokeText.textContent = random;
        })
}
jokeBtn.addEventListener("click", randomjoke);