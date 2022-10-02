let darkmode = "false";
let darkmodeicon = document.querySelector(".darkmodeicon");
function dark_mode() {
    if (darkmode === "false") {
        document.body.style.backgroundImage = "url('/assets/images/darkmode.png')";
        document.body.style.color = "white";
        darkmodeicon.classList.remove("fa-moon");
        darkmodeicon.classList.add("fa-sun");
        darkmode = "true";
    }
    else {
        document.body.style.backgroundImage = "url('/assets/images/qlgb.png')";
        document.body.style.color = "black";
        darkmodeicon.classList.remove("fa-sun");
        darkmodeicon.classList.add("fa-moon");
        darkmode = "false";
    }
}