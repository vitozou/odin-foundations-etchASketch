
console.log("Hello Worldo!");
const gridContainerDiv = document.getElementById("gridContainer");

function setupGrids() {
    // can set up so that the max i and j are chooseable
    for(var i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.style.display = "flex";
        for(var j = 0; j < 16; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }
        gridContainerDiv.appendChild(gridRow);
    }
}

function resetGrids() {
    gridSquares.forEach((currentSquare) => {
        currentSquare.style.backgroundColor = "aqua";
    })
}

setupGrids();

const gridSquares = document.querySelectorAll(".grid-square");
let isMousePressed = false;

gridContainerDiv.addEventListener("mousedown", () => {
    isMousePressed=true;
});

gridContainerDiv.addEventListener("mouseup", ()=> {
    isMousePressed=false;
});

gridSquares.forEach((currentSquare) => {
    currentSquare.addEventListener("mouseenter", () => {
        if(isMousePressed) {
            currentSquare.style.backgroundColor = "red";
        }
    });
});

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", resetGrids);