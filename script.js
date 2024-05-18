const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.querySelector(".button");

// Function to create the grid;
function createGrid(gridSize) {
  // Clear existing grid
  container.innerHTML = "";

  // Grid size will be handeleld in style.css;
  container.style.setProperty("--grid-size", gridSize);

  // Create the initial grid squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    container.appendChild(square);

    // Add event listener to change background color on mouse over
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "hotpink";
    });
  }
}

// Event listener for the button
button.addEventListener("click", () => {
  let gridSize = prompt(
    "Enter the number of squares per side for the new grid (1-100):",
    16 // Using 16 as a default value here, for the user to overwrite it;
  );
  gridSize = parseInt(gridSize);

  // Error handeling for if the user uses a too large input;
  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Create the initial grid
createGrid(16);
