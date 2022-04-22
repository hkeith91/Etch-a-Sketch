const columnsContainer = document.querySelector("#columns-container");
const clearButton = document.querySelector("#clear-button");
const gridRangeSlider = document.querySelector("#grid-size");
let root = document.documentElement;
let gridSize = 16;
let mouseOver = false;
let clicking = false;

generateGrid();
console.log(root);

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

      //events to highlight when clicked, or clicked and dragged
      gridSquare.addEventListener("mouseover", (e) => {
        mouseOver = true;
        if (clicking && mouseOver) {
          gridSquare.classList.add("highlighted");
        }
      });
      gridSquare.addEventListener("mousedown", (e) => {
        clicking = true;
        if (clicking && mouseOver) {
          gridSquare.classList.add("highlighted");
        }
      });
      //events to stop highlighting when not !clicking
      gridSquare.addEventListener("mouseout", (e) => {
        mouseOver = false;
      });
      gridSquare.addEventListener("mouseup", (e) => {
        clicking = false;
      });
    }
  }
}

function clearCanvas(){
  let currentCanvas = document.querySelectorAll(".grid-square");
  currentCanvas.forEach(square => {
    if (square.classList.contains("highlighted")){
      square.classList.remove("highlighted");
    }
  });
}

function destroyGrid(){
  let currentSquares = document.querySelectorAll(".grid-square");
  currentSquares.forEach(element => {
    element.remove();
  });
  let currentRows = document.querySelectorAll(".row-container");
  currentRows.forEach(element => {
    element.remove();
  })
}

function createNewGrid(){
  gridSize = gridRangeSlider.value;
  destroyGrid();
  generateGrid();
  
}
