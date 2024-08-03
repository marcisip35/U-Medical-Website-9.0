//header mobile integration
const navRight = document.getElementsByClassName("nav-right")[0];
const navRightMobile = document.getElementById("navRightMobile");
const navRightDropdownButton = document.getElementById("navRightDropdownButton");
const navRightDropdown = document.getElementById("navRightDropdown");

checkScreenWidth();
function checkScreenWidth(){
    //header dropdown
    if(window.innerWidth < 933){
        navRight.style.display = "none";
        navRightMobile.style.display = "block";
    } else {
        navRight.style.display = "flex";
        navRightMobile.style.display = "none";
        navRightDropdown.style.display = "none";
    }
}

//dropdown
let toggle = false;
window.addEventListener('resize', checkScreenWidth);

navRightDropdownButton.addEventListener("click",function(){
    if(!toggle){
        navRightDropdown.style.display = "flex";
        toggle = true;
    } else {
        navRightDropdown.style.display = "none";
        toggle = false;
    }
});

document.addEventListener("click", function(e){
    //check if the click is outside the dropdown button
    if(!navRightDropdownButton.contains(e.target)){
        navRightDropdown.style.display = "none";
        toggle = false;
    }
});