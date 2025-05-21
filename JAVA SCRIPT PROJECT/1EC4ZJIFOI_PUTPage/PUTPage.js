let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendPostHTTPRequest() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let requestBody = requestBodyEl.value;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: requestBody
    };

    loadingEl.classList.remove("d-none"); //we are removing d-none class name that was used in HTML code, to display loading.
    requestStatusEl.classList.add("d-none"); //We are adding d-none to the requestStatusEl to hide previous results

    //Here we are making fetch method request
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        //We are getting the response through jsonData
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none"); //removing d-none to the requestStatusEl to display the new results
            loadingEl.classList.add("d-none"); //adding d-none to hide loading.

            let requestStatus = jsonData.code; //assigns status code from response to the variable
            let httpResponse = JSON.stringify(jsonData); //converting the response data to a JSON string
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendPutRequestBtnEl.addEventListener("click", sendPostHTTPRequest);