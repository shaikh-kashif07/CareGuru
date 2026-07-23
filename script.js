// slider images
var slideImages = [
  "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=900&h=900&fit=crop",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&h=900&fit=crop",
  "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=900&h=900&fit=crop"
];

// current slide index
var currentSlide = 0;

function changeSlide(direction) {
  currentSlide = currentSlide + direction;

  // wrap forward
  if (currentSlide >= slideImages.length) {
    currentSlide = 0;
  }

  // wrap backward
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
  // update main image
  document.getElementById("mainImage").src = slideImages[currentSlide];

  // update active thumb
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

  if (extraText.classList.contains("show")) {
    extraText.classList.remove("show");
    button.innerText = "Read More";
  } else {
    extraText.classList.add("show");
    button.innerText = "Read Less";
  }
}

// goes to story
function goToStory(button) {
  document.getElementById("storyTab").scrollIntoView({ behavior: "smooth" });
}

// goes to documents
function goToDocuments() {
  document.getElementById("documentsSection").scrollIntoView({ behavior: "smooth" });
}

// goes to updates
function goToUpdates(button) {
  document.getElementById("updateTab").scrollIntoView({ behavior: "smooth" });
}

// goes to comments
function goToComments(button) {
  document.getElementById("commentTab").scrollIntoView({ behavior: "smooth" });
}

// change doc preview
function setDoc(clickedImage) {
  document.getElementById("mainDoc").src = clickedImage.src;
}


// header drop
// wns
function toggleDropdown(menuId) {
  var menu = document.getElementById(menuId);

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    // close other menu
    document.getElementById("loginMenu").classList.remove("show");
    document.getElementById("currencyMenu").classList.remove("show");

    menu.classList.add("show");
  }
}

function changeCurrency(currencyText) {
  document.getElementById("currencyLabel").innerText = currencyText + " ▾";
  document.getElementById("currencyMenu").classList.remove("show");
}


// Progress tracker
const raisedAmount = 5217460;
const totalAmount = 95000000;

// Calculate percentage
const percentage = (raisedAmount / totalAmount) * 100;

// Show percentage
document.getElementById("percent").innerText =
    percentage.toFixed(1) + "%";

// SVG calculations
const circle = document.getElementById("circleFill");

const radius = -60;
const circumference = 2 * Math.PI * radius;

// Set circle length
circle.style.strokeDasharray = circumference;

// Calculate filled length
const offset =
    circumference - (percentage / 100) * circumference;

circle.style.strokeDashoffset = offset;


// comment 
function postComment() {
  var input = document.getElementById("commentBox");

  // empty check
  if (input.value.trim() === "") {
    alert("Please write something before posting!");
    return;
  }

  alert("Thanks for your comment: " + input.value);
  input.value = "";
}


// subscribe
function subscribeNow() {
  var emailInput = document.getElementById("subscribeEmail");
  var email = emailInput.value.trim();

  // basic email check
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thanks for subscribing, " + email + "!");
  emailInput.value = "";
}


// popup functions
function showPopup(popupId) {
  document.getElementById("overlay").classList.add("show");
  document.getElementById(popupId).classList.add("show");
}

function hideAllPopups() {
  document.getElementById("overlay").classList.remove("show");

  var allPopups = document.querySelectorAll(".popup");
  for (var i = 0; i < allPopups.length; i++) {
    allPopups[i].classList.remove("show");
  }
}

// popup submit
function submitPopup(message) {
  alert(message);
  hideAllPopups();
}