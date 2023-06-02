// sayfa scroll olunca, header border-bottom'ı renklendirsin
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  if (window.pageYOffset > header.offsetHeight) {
    header.style.borderBottom = "1px solid #d3d3d3";
  } else {
    header.style.borderBottom = "1px solid transparent";
  }
});

// slider
// Initialize variables
let currentCard = 1;
const totalCards = 5;

// Function to show the current card
function showCard(cardIndex) {
  // Hide all cards
  const cards = document.querySelectorAll(".slider > div");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  // Set the initial position of the cards
  const cardsContainer = document.querySelector(".slider");
  cardsContainer.style.transform = `translate(-162px, -25px)`;

  // Show the current card
  const currentCard = document.querySelector(
    `.slider > div:nth-child(${cardIndex})`
  );
  currentCard.style.display = "block";

  // Disable/enable navigation buttons based on current card index
  const prevButton = document.querySelector(".btn-prev");
  const nextButton = document.querySelector(".btn-next");

  if (cardIndex === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (cardIndex === totalCards) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// Function to navigate to the previous card
function navigatePrev() {
  if (currentCard > 1) {
    currentCard--;
    showCard(currentCard);
  }
}

// Function to navigate to the next card
function navigateNext() {
  if (currentCard < totalCards) {
    currentCard++;
    showCard(currentCard);
  }
}
