const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");


menu.addEventListener("click", () => {
    menuList.classList.toggle("hidden")
})