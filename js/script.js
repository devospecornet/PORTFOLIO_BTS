const photo1 = document.getElementById("imgcl");

if (photo1) {
  photo1.classList.add("img1");
}

/* Gestion des modales compétences */
for (let i = 1; i <= 6; i++) {
  const clic = document.getElementById(`clic${i}`);
  const modal = document.getElementById(`imageVisible${i}`);
  const croix = document.getElementById(`croix${i}`);

  if (clic && modal) {
    clic.addEventListener("click", function () {
      modal.classList.add("afficher");
      document.body.classList.add("modal-open");
    });
  }

  if (croix && modal) {
    croix.addEventListener("click", function () {
      modal.classList.remove("afficher");
      document.body.classList.remove("modal-open");
    });
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("afficher");
        document.body.classList.remove("modal-open");
      }
    });
  }
}

/* Fermer la modale avec Echap */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".sectionSpe1.afficher").forEach((modal) => {
      modal.classList.remove("afficher");
    });
    document.body.classList.remove("modal-open");
  }
});

/* Apparition douce au scroll */
const revealElements = document.querySelectorAll(
  ".stats-section, #apropos, .competences, .experience-section, .synthese-section, .stack-section, #contact"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* Mise en avant lien nav selon section visible */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.remove("active-nav");

          if (href === `#${currentId}`) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  },
  {
    threshold: 0.45,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});





/*
const photo1 = document.getElementById("imgcl");
photo1.classList.add("img1");
//
let clic1 = document.getElementById("clic1");
let afficheContenu1 = document.getElementById("imageVisible1");
let croix1 = document.getElementById("croix1");

clic1.addEventListener("click", function () {
  afficheContenu1.classList.add("afficher");
});

croix1.addEventListener("click", function () {
  afficheContenu1.classList.remove("afficher");
});

let clic2 = document.getElementById("clic2");
let afficheContenu2 = document.getElementById("imageVisible2");
let croix2 = document.getElementById("croix2");

clic2.addEventListener("click", function () {
  afficheContenu2.classList.add("afficher");
});

croix2.addEventListener("click", function () {
  afficheContenu2.classList.remove("afficher");
});

let clic3 = document.getElementById("clic3");
let afficheContenu3 = document.getElementById("imageVisible3");
let croix3 = document.getElementById("croix3");

clic3.addEventListener("click", function () {
  afficheContenu3.classList.add("afficher");
});

croix3.addEventListener("click", function () {
  afficheContenu3.classList.remove("afficher");
});

let clic4 = document.getElementById("clic4");
let afficheContenu4 = document.getElementById("imageVisible4");
let croix4 = document.getElementById("croix4");

clic4.addEventListener("click", function () {
  afficheContenu4.classList.add("afficher");
});

croix4.addEventListener("click", function () {
  afficheContenu4.classList.remove("afficher");
});

let clic5 = document.getElementById("clic5");
let afficheContenu5 = document.getElementById("imageVisible5");
let croix5 = document.getElementById("croix5");

clic5.addEventListener("click", function () {
  afficheContenu5.classList.add("afficher");
});

croix5.addEventListener("click", function () {
  afficheContenu5.classList.remove("afficher");
});

let clic6 = document.getElementById("clic6");
let afficheContenu6 = document.getElementById("imageVisible6");
let croix6 = document.getElementById("croix6");

clic6.addEventListener("click", function () {
  afficheContenu6.classList.add("afficher");
});

croix6.addEventListener("click", function () {
  afficheContenu6.classList.remove("afficher");
});
*/