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

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    tabHead.forEach(function (head) {
      head.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other contents
    tabContent.forEach(function (content) {
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
