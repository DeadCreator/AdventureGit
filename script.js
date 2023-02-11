const closeMenu = document.getElementById("menu-close")
const openMenu = document.getElementById("menu-open")
const menu = document.getElementById("menu")

openMenu.addEventListener("click", () => {
    menu.classList.add("opened")
})
closeMenu.addEventListener("click", () => {
    menu.classList.remove("opened")
    
})