
console.log("Hello Worldo!");
const gridContainerDiv = document.getElementById("gridContainer");
let gridSquares;
let gridSize = 16;
let borderON = true;

function setupGrids(numGrids) {
    gridContainerDiv.innerHTML = ""; // clears
    const containerSize = 800;
    const squareSize = containerSize / numGrids;

    // can set up so that the max i and j are chooseable
    for(var i = 0; i < numGrids; i++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";
        gridRow.style.flex = "1";
        for(var j = 0; j < numGrids; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            if(borderON) {
                gridSquare.style.border = "2px solid black";
            }
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            gridRow.appendChild(gridSquare);
        }
        gridContainerDiv.appendChild(gridRow);
    }
    gridSquares = document.querySelectorAll(".grid-square");

    addSquareListeners();
}

setupGrids(gridSize);


function resetGrids() {
    gridSquares.forEach((currentSquare) => {
        currentSquare.style.backgroundColor = "white";
    });
}

function chooseColor() {
    currentColor = colorPicker.value;
}

function toggleBorder() {
    borderON = !borderON;
    if(borderON) {
        borderToggleButton.textContent = "Border ON";
        gridSquares.forEach((currentSquare) => {
            currentSquare.style.border = "2px solid black";
        });
    }
    else {
        borderToggleButton.textContent = "Border OFF";
        gridSquares.forEach((currentSquare) => {
            currentSquare.style.border = "none";
        });
    }
}

function changeGridSize() {
    const newGridSize = parseInt(document.getElementById("grid-size-slider").value);
    document.getElementById("grid-size-label").textContent = newGridSize;
    setupGrids(newGridSize);
    gridSize = newGridSize;

    // to reattach the listeners to the squares
    gridSquares.forEach((currentSquare) => {
        currentSquare.addEventListener("mouseenter", () => {
            if(isMousePressed) {
                currentSquare.style.backgroundColor = currentColor;
            }
        });
    });
}

const resetButton = document.getElementById("reset-button");
const colorPicker = document.getElementById("color-picker");
const borderToggleButton = document.getElementById("border-toggle-button");
const resizeSlider = document.getElementById("grid-size-slider");

let isMousePressed = false;
let currentColor = colorPicker.value;

function addSquareListeners() {
    gridSquares.forEach((currentSquare) => {
        currentSquare.addEventListener("mousedown", (event) => {
            event.preventDefault();
            isMousePressed = true;
            currentSquare.style.backgroundColor = currentColor;
        });

        currentSquare.addEventListener("mouseenter", () => {
            if(isMousePressed) {
                currentSquare.style.backgroundColor = currentColor;
            }
        });
    });
}



document.addEventListener("mouseup", ()=> {
    isMousePressed = false;
});


resetButton.addEventListener("click", resetGrids);
colorPicker.addEventListener("input", chooseColor);
borderToggleButton.addEventListener("click", toggleBorder);
resizeSlider.addEventListener("input", changeGridSize);

