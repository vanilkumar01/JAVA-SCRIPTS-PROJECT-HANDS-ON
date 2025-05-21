let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let resultMsgE1 = document.getElementById("resultMsg");
let cityMumbaiEl = document.getElementById("cityMumbai");
//let subBtnEl = document.getElementById("submitBtn");
let capitalCity = "Delhi";
let selectedCity = null;

cityHyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityChennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

cityDelhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
    console.log(event.target.value);
});

cityMumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});

questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsgE1.textContent = "Please select an option";
    } else if (selectedCity === capitalCity) {
        resultMsgE1.textContent = "Correct Answer";
        resultMsgE1.style.color = "green";
    } else {
        resultMsgE1.textContent = "Wrong Answer!";
        resultMsgE1.style.color = "red";
    }
});