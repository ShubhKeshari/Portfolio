/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 100,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

function resumeDownload() {
  window.open(
    "https://drive.google.com/file/d/10jMkOa615LN0h3n5YAIhOYZ4np_FnQZ_/view?usp=drive_link",
    "_blank"
  );
}

// Github Calander
GitHubCalendar(".calendar", "ShubhKeshari");

// or enable responsive functionality:
GitHubCalendar(".calendar", "ShubhKeshari", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "ShubhKeshari", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  },
});

// Contact Form Clear

// const clearForm = () => {
//   console.log("Hi i am clr");
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const message = document.getElementById("message");
//   console.log(name.value);
//   console.log(email.value);
//   console.log(message.value);
 
// };
