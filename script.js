  const menu = document.getElementById("menu");
  const menuBar = document.getElementById("menu-bar");

  menuBar.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });


window.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");

    // trigger the drop animation
    setTimeout(() => {
      header.classList.add("drop");
    }, 100);
  });

  const texts = [
  "I am a Web Developer",
  "I am a Professional Coder"
];

let textIndex = 0;   // which phrase
let charIndex = 0;   // which letter
let isDeleting = false;
const typingSpeed = 100; // ms per letter
const erasingSpeed = 50; // ms per letter when deleting
const delayBetween = 2000; // wait before erasing

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // typing
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      // wait before deleting
      isDeleting = true;
      setTimeout(typeEffect, delayBetween);
      return;
    }
  } else {
    // deleting
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // move to next phrase
    }
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

// Start typing effect
typeEffect();





const slider = document.getElementById("slider");
    const dotsContainer = document.getElementById("dots");

    const totalSlides = 5;
    const visibleSlides = 3;
    const totalPages = Math.ceil(totalSlides / visibleSlides); // 2 pages

    let currentPage = 0;

    // Create dots dynamically
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("span");
      dot.className =
        "h-3 w-3 mx-1 rounded-full cursor-pointer bg-gray-400 transition-colors duration-300";
      if (i === 0) dot.classList.add("bg-gray-800");
      dot.addEventListener("click", () => moveToPage(i));
      dotsContainer.appendChild(dot);
    }

    function moveToPage(page) {
      currentPage = page;
      // Move slider by full page width (100%)
      slider.style.transform = `translateX(-${page * 100}%)`;
      updateDots();
    }

    function updateDots() {
      document.querySelectorAll("#dots span").forEach((dot, index) => {
        dot.classList.remove("bg-gray-800");
        dot.classList.add("bg-gray-400");
        if (index === currentPage) {
          dot.classList.remove("bg-gray-400");
          dot.classList.add("bg-gray-800");
        }
      });
    }


    const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stops reload
    alert("Your message has been sent!");
  });