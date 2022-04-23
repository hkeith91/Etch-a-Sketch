const columnsContainer = document.querySelector("#columns-container");
const clearButton = document.querySelector("#clear-button");
const gridRangeSlider = document.querySelector("#grid-size");
const markerMode = document.getElementById("marker-mode");
let root = document.documentElement;
let gridSize = 16;
let mouseOver = false;
let clicking = false;

generateGrid();
changeMarker();

function generateGrid() {
  gridRangeSlider.value = gridSize;
  root.style.setProperty("--grid-size", gridRangeSlider.value);

  for (let i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    columnsContainer.append(rowContainer);

    for (let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      rowContainer.classList.add("row-container");
      rowContainer.append(gridSquare);

      defaultMarker(gridSquare);
    }
  }
}

function clearCanvas() {
  let currentCanvas = document.querySelectorAll(".grid-square");
  currentCanvas.forEach((square) => {
    if (square.classList.contains("highlighted")) {
      square.classList.remove("highlighted");
    }
  });
}

function destroyGrid() {
  let currentSquares = document.querySelectorAll(".grid-square");
  currentSquares.forEach((element) => {
    element.remove();
  });
  let currentRows = document.querySelectorAll(".row-container");
  currentRows.forEach((element) => {
    element.remove();
  });
}

function createNewGrid() {
  gridSize = gridRangeSlider.value;
  destroyGrid();
  generateGrid();
}

function changeMarker() {
  markerMode.addEventListener("change", function () {
    if (document.getElementById("default-mode").checked) defaultMarker(element);
  });
  if (document.getElementById("rainbow-mode")) rainbow - m;
}

function defaultMarker(element) {
  //events to highlight when clicked, or clicked and dragged
  element.addEventListener("mouseover", (e) => {
    mouseOver = true;
    if (clicking && mouseOver) {
      element.classList.add("highlighted");
    }
  });
  element.addEventListener("mousedown", (e) => {
    clicking = true;
    if (clicking && mouseOver) {
      element.classList.add("highlighted");
    }
  });
  //events to stop highlighting when !clicking
  element.addEventListener("mouseout", (e) => {
    mouseOver = false;
  });
  element.addEventListener("mouseup", (e) => {
    clicking = false;
  });
}

function rainbowMarker() {
  alert("rainbow!");
}

function pencilMode() {
  alert("pencil!");
}
