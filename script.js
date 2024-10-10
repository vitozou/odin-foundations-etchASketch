
console.log("Hello Worldo!");
const gridContainerDiv = document.getElementById("gridContainer");
let gridSquares;

function setupGrids() {
    // can set up so that the max i and j are chooseable
    for(var i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";
        for(var j = 0; j < 16; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.border = "2px solid black";
            gridRow.appendChild(gridSquare);
        }
        gridContainerDiv.appendChild(gridRow);
    }
    gridSquares = document.querySelectorAll(".grid-square");
}

setupGrids();

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

const resetButton = document.getElementById("reset-button");
const colorPicker = document.getElementById("color-picker");
const borderToggleButton = document.getElementById("border-toggle-button");

let isMousePressed = false;
let currentColor = colorPicker.value;
let borderON = true;

gridContainerDiv.addEventListener("mousedown", () => {
    isMousePressed=true;
});

gridContainerDiv.addEventListener("mouseup", ()=> {
    isMousePressed=false;
});

gridSquares.forEach((currentSquare) => {
    currentSquare.addEventListener("mouseenter", () => {
        if(isMousePressed) {
            currentSquare.style.backgroundColor = currentColor;
        }
    });
});

resetButton.addEventListener("click", resetGrids);
colorPicker.addEventListener("input", chooseColor);
borderToggleButton.addEventListener("click", toggleBorder);

