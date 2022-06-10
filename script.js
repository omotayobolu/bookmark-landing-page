const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");
const faqs = document.querySelectorAll(".faq");
const tabHeads = document.querySelector(".tab-head")[0];
const tabBody = document.querySelector(".tab-body")[0];

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

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
