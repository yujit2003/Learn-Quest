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

const toTop = document.querySelector(".to-top");
const topBtn = document.querySelector(".btn-top");

document.body.addEventListener("scroll",scrollTop);
function scrollTop(){
    if(document.body.scrollTop > 20){
        toTop.style.display = "block";
    }else{
        toTop.style.display = "none";
    }
}

topBtn.addEventListener("click",() => {
    document.body.scrollTop = 0;
})