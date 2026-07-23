// slider images
var slideImages = [
  "assets/upper-row-left-column_image-box_main-image.png",
  "assets/upper-row-left-column_image-box_main-image2.png",
  "assets/upper-row-left-column_image-box_main-image3.png"
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
const raisedAmount = 5229663;
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

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thanks for subscribing, " + email + "!");
  emailInput.value = "";
}


// donate popup - tab switching
function switchDonateTab(tabName) {
  var onceTab = document.getElementById("giveOnceTab");
  var monthlyTab = document.getElementById("giveMonthlyTab");
  var onceContent = document.getElementById("giveOnceContent");
  var monthlyContent = document.getElementById("giveMonthlyContent");

  if (tabName === "once") {
    onceTab.classList.add("active");
    monthlyTab.classList.remove("active");
    onceContent.classList.remove("hidden");
    monthlyContent.classList.add("hidden");
  } else {
    monthlyTab.classList.add("active");
    onceTab.classList.remove("active");
    monthlyContent.classList.remove("hidden");
    onceContent.classList.add("hidden");
  }
}

// donate popup - preset amount buttons (works for both once and monthly)
function selectAmount(button, mode) {
  var group = document.querySelector('.amount-options[data-mode="' + mode + '"]');
  var buttons = group.querySelectorAll(".amount-btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  button.classList.add("active");

  if (mode === "once") {
    document.getElementById("onceCustomAmount").value = button.dataset.amount;
    updateOnceTotal();
  } else {
    document.getElementById("monthlyCustomAmount").value = button.dataset.amount;
    updateMonthlyTotal();
  }
}

// donate popup - typed custom amount
function onCustomAmountChange(mode) {
  var group = document.querySelector('.amount-options[data-mode="' + mode + '"]');
  var buttons = group.querySelectorAll(".amount-btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  if (mode === "once") {
    updateOnceTotal();
  } else {
    updateMonthlyTotal();
  }
}

// donate popup - expand/collapse the tip section
function toggleTip() {
  document.getElementById("tipBody").classList.toggle("collapsed");
  document.getElementById("tipChevron").classList.toggle("open");
}

// donate popup - tip percent buttons (11% / 16% / 21% / Other Amount)
var selectedTipPercent = 16;

function selectTip(button) {
  var allTipButtons = document.querySelectorAll(".tip-btn");
  for (var i = 0; i < allTipButtons.length; i++) {
    allTipButtons[i].classList.remove("active");
  }
  button.classList.add("active");

  var percentValue = button.dataset.percent;
  var otherInput = document.getElementById("tipOtherInput");

  if (percentValue === "other") {
    selectedTipPercent = "other";
    otherInput.classList.remove("hidden");
  } else {
    selectedTipPercent = Number(percentValue);
    otherInput.classList.add("hidden");
  }

  updateOnceTotal();
}

// donate popup - recalculate Give Once total (base amount + tip)
function updateOnceTotal() {
  var base = Number(document.getElementById("onceCustomAmount").value) || 0;
  var tip = 0;

  if (selectedTipPercent === "other") {
    tip = Number(document.getElementById("tipOtherInput").value) || 0;
  } else {
    tip = Math.round(base * (selectedTipPercent / 100));
  }

  var total = base + tip;

  document.getElementById("onceBaseDisplay").innerText = base;
  document.getElementById("onceTipDisplay").innerText = tip;
  document.getElementById("onceTotalAmount").innerText = total;
  document.getElementById("onceDonateBtnAmount").innerText = total;
}

// donate popup - recalculate Give Monthly total (no tip involved)
function updateMonthlyTotal() {
  var base = Number(document.getElementById("monthlyCustomAmount").value) || 0;
  document.getElementById("monthlyDonateBtnAmount").innerText = base;
}

// donate popup - form submit (demo only, no backend yet)
function submitDonateForm(event, mode) {
  event.preventDefault();
  if (mode === "once") {
    alert("Give Once form submitted (demo only)");
  } else {
    alert("Give Monthly form submitted (demo only)");
  }
  return false;
}

// run once on page load so the numbers shown match the default selected amounts
updateOnceTotal();
updateMonthlyTotal();

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