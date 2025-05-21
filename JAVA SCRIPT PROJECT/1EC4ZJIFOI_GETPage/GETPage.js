let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");

function sendDeleteHTTPRequest() {
    let userInputVal = httpResponseEl.value;
    let requestUrl = "https://gorest.co.in/public-api/users/"; // Add '/' after the URL and append userInputVal to the url
    let options = {
        method: "GET",

    };

    requestStatusEl.classList.remove("d-none"); // We are removing d-none class name that was used in HTML code, to display loading.
    requestStatusEl.classList.add("d-none"); // We are adding d-none to the requestStatusEl to hide previous results

    // Here we are making fetch method request
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        // We are getting the response through jsonData
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none"); // Removing d-none to the requestStatusEl to display the new results
            loadingEl.classList.add("d-none"); // Adding d-none to hide loading.
            let requestStatus = jsonData.code; // Assigns status code from response to the variable
            let httpResponse = JSON.stringify(jsonData); // Converting the response data to a JSON string
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendGetRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);