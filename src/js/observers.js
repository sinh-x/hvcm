const header = document.querySelector("header");
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".home-intro");
const sectionOneSmall = document.querySelector(".small-intro");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionTestOptions = {
  rootMargin: "-500px 0px 0px 0px"
};


const sectionOneObserver = new IntersectionObserver(
  function (entries, sectionOneObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("header-scrolled");
        nav.classList.add("nav-scrolled")
      } else {
        header.classList.remove("header-scrolled");
        nav.classList.remove("nav-scrolled")
      }
    })
  }, sectionOneOptions)

const sectionTestObserver = new IntersectionObserver(
  function (entries, sectionOneObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("header-scrolled");
        nav.classList.add("nav-scrolled")
      } else {
        header.classList.remove("header-scrolled");
        nav.classList.remove("nav-scrolled")
      }
    })
  }, sectionOneOptions)

sectionOneObserver.observe(sectionOne)
sectionOneObserver.observe(sectisectionOneSmallonOne)