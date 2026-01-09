const photo1 = document.getElementById("imgcl");
photo1.classList.add("img1");
//
let clic1 = document.getElementById("clic1");
let afficheContenu1 = document.getElementById("imageVisible1");
let croix1 = document.getElementById("croix1");

clic1.addEventListener("click", function () {
  afficheContenu1.classList.add("afficher");
  document.body.classList.add("modal-open");
});

croix1.addEventListener("click", function () {
  afficheContenu1.classList.remove("afficher");
  document.body.classList.remove("modal-open");
});

let clic2 = document.getElementById("clic2");
let afficheContenu2 = document.getElementById("imageVisible2");
let croix2 = document.getElementById("croix2");

clic2.addEventListener("click", function () {
  afficheContenu2.classList.add("afficher");
  document.body.classList.add("modal-open");
});

croix2.addEventListener("click", function () {
  afficheContenu2.classList.remove("afficher");
  document.body.classList.remove("modal-open");
});

let clic3 = document.getElementById("clic3");
let afficheContenu3 = document.getElementById("imageVisible3");
let croix3 = document.getElementById("croix3");

clic3.addEventListener("click", function () {
  afficheContenu3.classList.add("afficher");
  document.body.classList.add("modal-open");
});

croix3.addEventListener("click", function () {
  afficheContenu3.classList.remove("afficher");
  document.body.classList.remove("modal-open");
});

let clic4 = document.getElementById("clic4");
let afficheContenu4 = document.getElementById("imageVisible4");
let croix4 = document.getElementById("croix4");

clic4.addEventListener("click", function () {
  afficheContenu4.classList.add("afficher");
  document.body.classList.add("modal-open");
});

croix4.addEventListener("click", function () {
  afficheContenu4.classList.remove("afficher");
  document.body.classList.remove("modal-open");
});

let clic5 = document.getElementById("clic5");
let afficheContenu5 = document.getElementById("imageVisible5");
let croix5 = document.getElementById("croix5");

clic5.addEventListener("click", function () {
  afficheContenu5.classList.add("afficher");
  document.body.classList.add("modal-open");
});

croix5.addEventListener("click", function () {
  afficheContenu5.classList.remove("afficher");
  document.body.classList.remove("modal-open");
});

let clic6 = document.getElementById("clic6");
let afficheContenu6 = document.getElementById("imageVisible6");
let croix6 = document.getElementById("croix6");

clic6.addEventListener("click", function () {
  afficheContenu6.classList.add("afficher");
  document.body.classList.add("modal-open");
});

croix6.addEventListener("click", function () {
  afficheContenu6.classList.remove("afficher");
  document.body.classList.remove("modal-open");
});
