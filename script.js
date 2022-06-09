const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");
const faqs = document.querySelectorAll(".faq");

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

const tabHeader = document.querySelector(".tab-header")[0];
const tabIndicator = document.querySelector(".tab-indicator")[0];
const tabBody = document.querySelector(".tab-body")[0];
const tabPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabPane.length; i++) {
  tabPane[i].addEventListener("click", () => {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
  });
}
