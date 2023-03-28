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

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabConteudo = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo";

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });

    function activeTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabConteudo[index].classList.add(activeClass);
    }
  }
}
initTabNav();

// Acordion List

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList[0].classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
