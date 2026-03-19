const photo1 = document.getElementById("imgcl");

if (photo1) {
  photo1.classList.add("img1");
}

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
}