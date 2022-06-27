const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");
const faqs = document.querySelectorAll(".faq");
const tabs = document.querySelector(".tabs");
const tabHead = document.querySelectorAll(".tab-head");
const tabContent = document.querySelectorAll(".tab-content");

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

tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabHead.forEach((head) => {
      head.classList.remove("active");
    });
    e.target.classList.add("active");
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
