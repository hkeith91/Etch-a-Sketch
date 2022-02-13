const columnsContainer = document.querySelector("#columns-container");
const gridSize = 16;

GenerateGrid();

function handleMouseEnter(){
  this.classList.add("highlighted");
};
function handleClick(){
  this.classList.add("highlighted");
}

function GenerateGrid() {
  for (let i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    columnsContainer.append(rowContainer);

    for (let j = 0; j < gridSize; j++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-square");
      rowContainer.classList.add("row-container");
      rowContainer.append(gridCell);
      gridCell.addEventListener("mouseenter", handleMouseEnter);
      // gridCell.addEventListener("click", handleClick);
      gridCell.addEventListener("click", (e) =>{
        console.log(e.target);
      })
    }
  }
}


