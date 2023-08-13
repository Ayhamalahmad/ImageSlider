// Get images
let images = Array.from(document.querySelectorAll(".slider-container img"));
// Get Number Of Slides
let SlidesCount = images.length;
// set Current Index
let currentIndex = 1;
// Silde Number Element
let sildeNumberElement = document.querySelector(".img-number");
//  previous And Next Buttons
let previousButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
// Handle click On Buttons
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);
//  Create Ul Element
let UlElement = document.createElement("ul");
// Set Id Ul Element
UlElement.setAttribute("id", "pagination-ul");
// Create List Items Based On Slides Coun
for (let i = 1; i <= SlidesCount; i++) {
  // Create The LI
  let liItem = document.createElement("li");
  // Set Custom Attribute
  liItem.setAttribute("data-index", i);
  // Set Item Text
  liItem.appendChild(document.createTextNode(i));
  // Append Items To the Main Ul list
  UlElement.appendChild(liItem);
}

// Add The Created Elemet To THe Page
document.querySelector(".signs").appendChild(UlElement);

// Get The New Created Ul
let ceatedUl = document.getElementById("pagination-ul");

// Get pagination Bullets As Array
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
// Loop Through  All bullets Items
for (let i = 0; i < paginationBullets.length; i++) {
  //
  paginationBullets[i].addEventListener("click", (e) => {
    // Set currentIndex by parsing the "data-index" attribute of the clicked element
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    // Trigger cheker Function
    cheker();
  });
}
// Trigger The Cherker Function
cheker();
// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex++;
    cheker();
  }
}
// Previous Slide Function
function previousSlide() {
  if (previousButton.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex--;
    cheker();
  }
}
// Cheker Function
function cheker() {
  // Set The Side Number
  sildeNumberElement.textContent = `Silde # ${currentIndex} of ${SlidesCount} `;
  // Trigger removeActive Function
  removeActive();
  //Set Active Class On Current Image
  images[currentIndex - 1].classList.add("active");
  //Set Active Class On Current Li
  ceatedUl.children[currentIndex - 1].classList.add("active");
  // Chek IF the Current Slide is The First
  if (currentIndex == 1) {
    // Add Class disabled To the Prev button
    previousButton.classList.add("disabled");
  } else {
    // Remove Class disabled From the Prev button
    previousButton.classList.remove("disabled");
  }
  // Check IF the Current Slide is The Last
  if (currentIndex == SlidesCount) {
    // Add Class disabled To the Next button
    nextButton.classList.add("disabled");
  } else {
    // Remove Class disabled From the Next button
    nextButton.classList.remove("disabled");
  }
}

// Remove  Class active From Imgs And Li Items
function removeActive() {
  // Loop Through Imgs
  images.forEach((img) => {
    img.classList.remove("active");
  });
  // Loop Through Li
  paginationBullets.forEach((Bullet) => {
    Bullet.classList.remove("active");
  });
}
