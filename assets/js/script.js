// Menu Mobile
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");

  const links = document.querySelectorAll('.js-menu a[href^="#"');
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("ativo");
    });
  });

  const active = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", active);
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Hover menu
const logo = document.querySelector(".logo-menu img");

function logoHover() {
  logo.src = "assets/img/wolf.png";
}

function logoOut() {
  logo.src = "assets/img/wolf3.png";
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
  const activeClass = "ativo";
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

// Scroll suave

const linksInterno = document.querySelectorAll('.js-menu a[href^="#"');

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInterno.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Animação de scroll
function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimationScroll();
// Scroll

function subirTela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function displayBtn() {
  if (window.scrollY === 0) {
    document.querySelector(".scroll-btn").style.display = "none";
  } else {
    document.querySelector(".scroll-btn").style.display = "flex";
  }
}

window.addEventListener("scroll", displayBtn);
