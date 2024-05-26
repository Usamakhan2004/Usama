
let p_item = document.getElementById("project-item");
let p_down = document.getElementById("side-menu-item1");
let p_value = false;

let p2_item = document.getElementById("other-item");
let p2_down = document.getElementById("side-menu-item2");
let p2_value = true;

let otherIcon = document.getElementById("other-item-icon");
let ProjectIcon = document.getElementById("project-item-icon");

let respMenu = document.getElementById("blog-resp-menu");
let sideBar = document.getElementById("side-bar");
let sidBarClose =document.getElementById("resp-close");
let sideBarOpen = true;

p_item.addEventListener("click", ProjectMenuClick);
p2_item.addEventListener("click", OtherMenuClick);
respMenu.addEventListener("click", RespMenuClick);
sidBarClose.addEventListener("click", RespMenuClick);

function ProjectMenuClick(){
    if(p_value){
        p_down.style.height = "100px";
        ProjectIcon.src = "../assets/whitedown.png";
        p_value = false;
    }else{
        p_down.style.height = "0px";
        ProjectIcon.src = "../assets/left.png";
        p_value = true;
    }
}

function OtherMenuClick(){
    if(p2_value){
        p2_down.style.height = "150px";
        otherIcon.src = "../assets/whitedown.png"
        p2_value = false;
    }else{
        p2_down.style.height = "0px";
        otherIcon.src = "../assets/left.png"
        p2_value = true;
    }
}
function RespMenuClick(){
    if(sideBarOpen){
        sideBar.style.marginLeft = "0px"
        sideBarOpen = false;
    }else{
        sideBar.style.marginLeft = "-300px"
        sideBarOpen = true;
    }
}