const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");
const faqs = document.querySelectorAll(".faq");
const tabContent = document.querySelectorAll(".tab-content");
const tabHead = document.querySelectorAll(".tab-head");

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

tabHead.forEach((head) => {
  head.addEventListener("click", () => {
    head.classList.toggle("active");
  });
});
