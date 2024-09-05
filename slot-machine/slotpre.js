// Symbols that will appear on the slot machine reels
const symbols = ["🍒", "🍋", "🍊", "🍉", "🔔", "⭐"];

// Function to spin a single reel
function spinReel() {
  // Generate a random index to select a symbol from the array
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

// Function to spin all three reels and update the UI
function spin() {
  // Get random symbols for each reel
  const reel1 = spinReel();
  const reel2 = spinReel();
  const reel3 = spinReel();

  // Display the symbols in the corresponding reel elements
  document.getElementById("reel1").textContent = reel1;
  document.getElementById("reel2").textContent = reel2;
  document.getElementById("reel3").textContent = reel3;

  // Check if all three symbols match to determine if the player won
  if (reel1 === reel2 && reel1 === reel3) {
    document.getElementById("result").textContent = "You Win!";
  } else {
    document.getElementById("result").textContent = "Try Again!";
  }
}

// Add an event listener to the spin button to trigger the spin function
document.getElementById("spin-button").addEventListener("click", spin);
