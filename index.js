let menuIcon = document.getElementById("menu-icon");
let menuCut = document.getElementById("menuCut");
let dropDown = document.getElementById("drop-down");
let ddi = document.getElementById("ddi");
let menu = document.getElementById("menu");

let menuOpen = true;
let dropOpen = true;
let down = true;

menuIcon.addEventListener("click", handleClick);
menuCut.addEventListener("click", handleClick);
dropDown.addEventListener("click", handleDropDown);

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
        ddi.style.height = "130px";
    }else{
        dropOpen = true;
        ddi.style.height = "0px";
    }
}