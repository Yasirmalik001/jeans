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
  button.addEventListener("click", nextStep);
});

const levelButtons = document.querySelectorAll(".level-btn");
levelButtons.forEach((button) => {
  button.addEventListener("click", nextStep);
});

const timeButtons = document.querySelectorAll(".time-btn");
timeButtons.forEach((button) => {
  button.addEventListener("click", nextStep);
});

const showContactFormBtn = document.getElementById("showContactFormBtn");
showContactFormBtn.addEventListener("click", showContactForm);

const prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", prevStep);

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextStep);

let currentStep = 1;

function nextStep() {
  const currentStepDiv = document.getElementById(`step${currentStep}`);
  currentStepDiv.classList.remove("active");
  currentStep++;

  const nextStepDiv = document.getElementById(`step${currentStep}`);
  if (nextStepDiv) {
    nextStepDiv.classList.add("active");
    updateProgressBar();
    updateNavigationButtons();
  }
}

function prevStep() {
  const currentStepDiv = document.getElementById(`step${currentStep}`);
  currentStepDiv.classList.remove("active");
  currentStep--;

  const prevStepDiv = document.getElementById(`step${currentStep}`);
  if (prevStepDiv) {
    prevStepDiv.classList.add("active");
    updateProgressBar();
    updateNavigationButtons();
  }
}

function showContactForm() {
  const step4 = document.getElementById("step4");
  step4.classList.remove("active");

  const step5 = document.getElementById("step5");
  step5.classList.add("active");
  currentStep = 5;
  updateProgressBar();
  updateNavigationButtons();
}

function updateProgressBar() {
  const progress = currentStep * 20; // Each step is 20%
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${progress}%`;
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (currentStep === 1) {
    prevBtn.style.opacity = "0.5";
    prevBtn.style.pointerEvents = "none"; // Disable the button
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "auto"; // Enable the button
  }

  if (currentStep === 5) {
    nextBtn.style.opacity = "0.5";
    nextBtn.style.pointerEvents = "none"; // Disable the button
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "auto"; // Enable the button
  }
}

updateNavigationButtons();

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
