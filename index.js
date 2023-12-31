const MenuIcon = document.getElementById("menu-icon");
const Close = document.getElementById("close-icon");
const Menu = document.getElementById("menu-responsive");


MenuIcon.addEventListener("click", () => {
    Menu.style.transform = "translateX(0)";
    MenuIcon.style.display = "none";
    Close.style.display = "inline";
})

Close.addEventListener("click", () => {
    Menu.style.transform = "translateX(1000px)";
    MenuIcon.style.display = "inline";
    Close.style.display = "none";
})