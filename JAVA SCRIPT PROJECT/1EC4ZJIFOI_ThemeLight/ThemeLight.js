let bgContainerE1 = document.getElementById("bgContainer");
let headingE1 = document.getElementById("heading");
let theInputuser = document.getElementById("themeUserInput");
let lightThemeImgUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
    let inputValue = theInputuser.value;
    if (event.key === "Enter") {
        if (inputValue === "Light") {
            bgContainerE1.style.backgroundImage = lightThemeImgUrl;
            console.log("lina");

        } else if (inputValue === "Dark") {
            bgContainerE1.style.backgroundImage = darkThemeImgUrl;
            console.log("kumar");
            headingE1.classList.add("heading");


        }


    }
}
theInputuser.addEventListener("keydown", changeTheme);