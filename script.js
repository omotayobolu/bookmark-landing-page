const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  modal.classList.toggle("active");
  openModal;
  closeModal;
});

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
