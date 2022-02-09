const columnsContainer = document.querySelector("#columns-container");
const rowNumber = 16;

GenerateGrid();

function GenerateGrid() {
  for (let i = 0; i < rowNumber; i++) {
    const rowContainer = document.createElement("div");
    columnsContainer.append(rowContainer);

    for (let j = 0; j < rowNumber; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      rowContainer.classList.add("row-container");
      rowContainer.append(gridSquare);
    }
  }
}

