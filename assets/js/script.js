// Menu Mobile
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
  const active = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", active);
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
// Hover menu
const logo = document.querySelector(".logo-menu img");

function logoHover() {
  logo.src = "assets/img/wolf3.png";
}

function logoOut() {
  logo.src = "assets/img/wolf.png";
}

logo.addEventListener("mouseover", logoHover);
logo.addEventListener("mouseout", logoOut);

// Lista de imagens
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabConteudo = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabConteudo.length) {

  tabConteudo[0].classList.add("ativo");
  
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });

  function activeTab(index) {
    tabConteudo.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabConteudo[index].classList.add("ativo");
  }
}
