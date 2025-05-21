let searchInput = document.getElementById("searchInput");

function createAndappendSearchresult(result) {

    let {
        link,
        title,
        description
    } = result;
    let resultItem = document.getElementById("div");
    resultItem.classList.add("result-item");
    let titleItemEl = document.createElement("a");
    titleItemEl.href = link;
    titleItemEl.target = "_blank";
    titleItemEl.classList.add("result_title");
    titleItemEl.textContent = title;
    resultItem.appendChild(titleItemEl);
    //break element 
    let breakElement = document.createElement("br");
    titleItemEl.appendChild(breakElement);
    let urlEl = document.createElement("a");
    urlEl.classList.add("result_url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItem.appendChild(urlEl);
    let breakElem = document.createElement("br");
    resultItem.appendChild(breakElem);
    let descriptinEl = document.createElement("p");
    descriptinEl.classList.add("link-description");
    descriptinEl.textContent = description;
    resultItem.appendChild(descriptinEl);
}

function displayResult(searchResults) {
    for (let result of searchResults) {
        createAndappendSearchresult(result);
    }
}

function wikipediasearch(event) {
    let searchInputvalue = searchInput.value;
    if (event.key === "Enter") {
        searchInput.textContent = searchInputvalue;
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputvalue;
        fetch(url, options)
            .then(function(response) {
                return response.json();

            })
            .then(function(jsonData) {
                let {
                    search_result
                } = jsonData;
                displayResult(search_result);
            });
    }

}


searchInput.addEventListener("keydown", wikipediasearch);