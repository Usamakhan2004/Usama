let menuIcon = document.getElementById("menu-icon");
let menuCut = document.getElementById("menuCut");
let dropDown = document.getElementById("drop-down");
let ddi = document.getElementById("ddi");
let menu = document.getElementById("menu");
let dwnBtn = document.getElementById("dwn-btn");
let dwnbBox = document.getElementById("dwn-btns-box");
let dwnCutBtn = document.getElementById("dwn-cut-btn");

let menuOpen = true;
let dropOpen = true;
let down = true;
let dwnShown = true;

menuIcon.addEventListener("click", handleClick);
menuCut.addEventListener("click", handleClick);
dropDown.addEventListener("click", handleDropDown);
dwnBtn.addEventListener("click", handleDownloadButton);
dwnCutBtn.addEventListener("click", handleDownloadButton);

function handleClick(){
    if(menuOpen){
        menuOpen = false;
        menu.style.left = "0px";
    }else{
        menuOpen = true;
        menu.style.left = "-260px";
    }
}
function handleDropDown(){
    if(dropOpen){
        dropOpen = false;
        ddi.style.height = "175px";
    }else{
        dropOpen = true;
        ddi.style.height = "0px";
    }
}
function handleDownloadButton(){
    if(dwnShown){
        dwnShown = false;
        dwnbBox.style.visibility = "visible";
    }else{
        dwnShown = true;
        dwnbBox.style.visibility = "hidden";
    }
    console.log("Ok");
}