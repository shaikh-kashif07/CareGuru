// hamburger
document.addEventListener("DOMContentLoaded", function () {
  var secondBtn = document.querySelector(".second-button");
  if (secondBtn) {
    secondBtn.addEventListener("click", function () {
      var icon = document.querySelector(".animated-icon2");
      if (icon) {
        icon.classList.toggle("open");
      }
    });
  }
});

// slider images
var slideImages = [
  "assets/upper-row-left-column_image-box_main-image.png",
  "assets/upper-row-left-column_image-box_main-image2.png",
  "assets/upper-row-left-column_image-box_main-image3.png",
];

// current slide index
var currentSlide = 0;

function changeSlide(direction) {
  currentSlide = currentSlide + direction;

  if (currentSlide >= slideImages.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slideImages.length - 1;
  }

  updateSlide();
}

function setSlide(index) {
  currentSlide = index;
  updateSlide();
}

function updateSlide() {
  var mainImg = document.getElementById("mainImage");
  if (mainImg) {
    mainImg.src = slideImages[currentSlide];
  }

  var thumbs = document.querySelectorAll(".thumb");
  for (var i = 0; i < thumbs.length; i++) {
    if (i === currentSlide) {
      thumbs[i].classList.add("active");
    } else {
      thumbs[i].classList.remove("active");
    }
  }
}

// story read more
function toggleStory() {
  var extraText = document.getElementById("storyExtra");
  var button = document.getElementById("storyBtn");

  if (extraText && button) {
    if (extraText.classList.contains("show")) {
      extraText.classList.remove("show");
      button.innerText = "Read More";
    } else {
      extraText.classList.add("show");
      button.innerText = "Read Less";
    }
  }
}

function goToStory(button) {
  var el = document.getElementById("storyTab");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function goToDocuments() {
  var el = document.getElementById("documentsSection");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function goToUpdates(button) {
  var el = document.getElementById("updateTab");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function goToComments(button) {
  var el = document.getElementById("commentTab");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// change doc preview
function setDoc(clickedImage) {
  var mainDoc = document.getElementById("mainDoc");
  if (mainDoc && clickedImage) {
    mainDoc.src = clickedImage.src;
  }
}

function changeCurrency(currencyText) {
  var label = document.getElementById("currencyLabel");
  if (label) {
    label.innerHTML = currencyText + ' <i class="fa-solid fa-chevron-down ms-1" style="font-size: 11px;"></i>';
  }
  var labelMobile = document.getElementById("currencyLabelMobile");
  if (labelMobile) {
    labelMobile.innerHTML = currencyText + ' <i class="fa-solid fa-chevron-down ms-1" style="font-size: 11px;"></i>';
  }
}

// Progress tracker
document.addEventListener("DOMContentLoaded", function () {
  const raisedAmount = 5229663;
  const totalAmount = 95000000;

  // Calculate percentage
  const percentage = (raisedAmount / totalAmount) * 100;

  // Show percentage
  const percentEl = document.getElementById("percent");
  if (percentEl) {
    percentEl.innerText = percentage.toFixed(1) + "%";
  }

  // SVG calculations
  const circle = document.getElementById("circleFill");
  if (circle) {
    const radius = -60;
    const circumference = 2 * Math.PI * radius;

    // Set circle length
    circle.style.strokeDasharray = circumference;

    // Calculate filled length
    const offset = circumference - (percentage / 100) * circumference;

    circle.style.strokeDashoffset = offset;
  }
});

// comment
function postComment() {
  var input = document.getElementById("commentBox");

  if (!input || input.value.trim() === "") {
    alert("Please write something before posting!");
    return;
  }

  alert("Thanks for your comment: " + input.value);
  input.value = "";
}

