let converBtnEl = document.getElementById("convertBtn");
converBtnEl.addEventListener("click", function getSecond() {
    let hourInputEl = parseInt(document.getElementById("hoursInput").value);
    let minuteInputEl = parseInt(document.getElementById("minutesInput").value);
    let seconds = ((hourInputEl) * 60 + minuteInputEl) * 60;

    let errorMsg1 = document.getElementById("errorMsg");
    let showSeconds = document.getElementById("timeInSeconds");

    if (isNaN(hourInputEl) || isNaN(minuteInputEl)) {
        errorMsg1.textContent = "please enter any value";
        errorMsg1.style.color = "#f7faf5";
    } else {
        showSeconds.textContent = seconds;
        showSeconds.style.color = "#ffffff";

    }

})