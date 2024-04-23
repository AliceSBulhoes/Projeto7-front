const btnMobile = document.querySelector("#btnMob");

function Menu(){
    const navBar= document.querySelector("nav");
    navBar.classList.toggle("active");
}
btnMobile.addEventListener('click', Menu)