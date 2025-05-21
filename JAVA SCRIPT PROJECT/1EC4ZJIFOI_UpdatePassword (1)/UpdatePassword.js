let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let updateBtnEl = document.getElementById("updateBtn");
updatePasswordFormEl.addEventListener("submit", function(event) {
    console.log("anil");
    event.preventDefault();
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }

})
newPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsgEl.textContent = "required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
})
//first properties of code
let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
confirmPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required*";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
})
updateBtnEl.addEventListener("click", function(event) {

    if (newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
})