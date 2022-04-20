const columnsContainer = document.querySelector("#columns-container");
const clearButton = document.querySelector("#clear-button");
// let rowContainer;
// let gridSquare;
let gridSize = 16;
let mouseOver = false;
let clicking = false;

generateGrid();

function generateGrid() {
  for (let i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    columnsContainer.append(rowContainer);
    // let columnArr = [];
    // columnArr.push(rowContainer);

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

// function clearGrid(){
//   columnsContainer.forEach(rowContainer => {
//     rowContainer.forEach(gridSquare => {
//       if (gridSquare.classList.contains("highlighted")){
//         gridSquare.classList.remove("highlighted");
//       }
//     });
//   });
// }
