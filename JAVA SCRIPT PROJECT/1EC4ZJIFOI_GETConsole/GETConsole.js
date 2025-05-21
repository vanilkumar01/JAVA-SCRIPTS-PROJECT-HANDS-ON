let sendRequestBtnEl = document.getElementById('sendRequestBtn');
let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatus = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");


consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})
let requestUrlMethodValue = "POST";
let bodyValue = null;
requestMethodEl.addEventListener("change", function(event) {
    requestUrlMethodValue = event.target.valu;

})
requestBodyEl.addEventListener("change", function(event) {
    bodyValue = event.target.value;
})

function createAndAppendRequest() {
    let url = requestUrlEl.value;
    let options = {
        method: requestUrlMethodValue,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 4f77ae40a1d9d6d49398f86870181cdb47d8f48a44fb06b3abc13be35902646a"

        },
        body: bodyValue
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseStatus.value = jsonData.code;
            responseBodyEl.value = JSON.stringify(jsonData);
        })

}
sendRequestBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.textContent = "Required";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
    createAndAppendRequest();
})