const columnsContainer = document.querySelector("#columns-container");
const clearButton = document.querySelector("#clear-button");
const gridRangeSlider = document.querySelector("#grid-size");
const markerMode = document.getElementById("marker-mode");
const markerColor = document.getElementById("marker-color");
const bgColor = document.getElementById("bg-color");
const white = "#ffffff";
const root = document.documentElement;
const displayGridRadio = document.getElementById("display-grid");
let gridSize = 16;
let mouseOver = false;
let clicking = false;
let currentCanvas;

generateGrid();

function generateGrid() {
  gridRangeSlider.value = gridSize;
  root.style.setProperty("--grid-size", gridRangeSlider.value);

  for (let i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    columnsContainer.append(rowContainer);

    for (let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.style.setProperty("background-color", white);
      gridSquare.classList.add("grid-square");
      rowContainer.classList.add("row-container");
      rowContainer.append(gridSquare);

      addEventListeners(gridSquare);
    }
  }
  currentCanvas = document.querySelectorAll(".grid-square");
}

function clearCanvas() {
  if (confirm("Clear entire canvas?")) {
    currentCanvas.forEach((square) => {
      square.style.setProperty("background-color", white);
    });
  }
}

function fillCanvas() {
  if (confirm("Fill entire canvas with selected color?")) {
    currentCanvas.forEach((element) =>
      element.style.setProperty("background-color", bgColor.value)
    );
  }
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
  if(confirm("Clear Canvas and resize?")){
    destroyGrid();
    generateGrid();    
  }
}

function marker(element) {
  if (document.getElementById("default-mode").checked) defaultMarker(element);
  if (document.getElementById("rb-mode").checked) rainbowMarker(element);
  if (document.getElementById("pencil-mode").checked) pencilMarker(element);
  if (document.getElementById("rave-mode").checked) raveMarker(element);
  if (document.getElementById("eraser").checked) eraser(element);
}

function addEventListeners(element) {
  //events to highlight when clicked, or clicked and dragged
  element.addEventListener("mouseover", (e) => {
    mouseOver = true;
    if (clicking && mouseOver) {
      marker(element);
    }
  });
  element.addEventListener("mousedown", (e) => {
    clicking = true;
    if (clicking && mouseOver) {
      marker(element);
    }
  });
  //events to stop highlighting when !clicking
  element.addEventListener("mouseout", (e) => {
    mouseOver = false;
  });
  element.addEventListener("mouseup", (e) => {
    clicking = false;
  });
  displayGridRadio.addEventListener("change", displayGrid(element));
}

function defaultMarker(element) {
  element.style.setProperty("background-color", markerColor.value);
}

function rainbowMarker(element) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.setProperty("background-color", "#" + randomColor);
}

function pencilMarker(element) {
  alert("pencil!");
}

function raveMarker(element) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  root.style.setProperty("--highlighted-color", "#" + randomColor);
  element.classList.add("highlighted");
}

function eraser(element) {
  element.style.setProperty("background-color", white);
}

function displayGrid(element){
  if (displayGridRadio.checked) element.classList.add("grid-borders");
  if (!displayGridRadio.checked) element.classList.remove("grid-borders"); 
}

function boldSelected(option) {
  option.classList.add("selected");
}
