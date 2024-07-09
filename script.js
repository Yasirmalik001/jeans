// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  // Add any other Swiper configurations you need
});

const categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    nextStep();
  });
});

const levelButtons = document.querySelectorAll(".level-btn");
levelButtons.forEach((button) => {
  button.addEventListener("click", function () {
    nextStep();
  });
});

const timeButtons = document.querySelectorAll(".time-btn");
timeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    nextStep();
  });
});

const showContactFormBtn = document.getElementById("showContactFormBtn");
showContactFormBtn.addEventListener("click", function () {
  showContactForm();
});

let currentStep = 1;

function nextStep() {
  const currentStepDiv = document.getElementById(`step${currentStep}`);
  currentStepDiv.classList.remove("active");
  currentStep++;

  const nextStepDiv = document.getElementById(`step${currentStep}`);
  if (nextStepDiv) {
    nextStepDiv.classList.add("active");
    updateProgressBar();
  }
}

function showContactForm() {
  const step4 = document.getElementById("step4");
  step4.classList.remove("active");

  const step5 = document.getElementById("step5");
  step5.classList.add("active");
  updateProgressBar();
}

function updateProgressBar() {
  const progress = currentStep * 20; // Each step is 20%
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${progress}%`;
}

let ctaButton = document.querySelector(".elementor-size-sm");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    ctaButton.classList.add("active");
  } else {
    ctaButton.classList.remove("active");
  }
});

const section = document.querySelector(".transformation-clients");
const previousHistory = document.querySelector(".previous-history");
const swiperContainer = document.querySelector(".swiper-container");

const observerOptions = {
  root: null,
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      previousHistory.classList.add("active");
      swiperContainer.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(section);
