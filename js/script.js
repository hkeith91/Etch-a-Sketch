const columnsContainer = document.querySelector("#columns-container");
const gridSize = 16;
let mouseOver = false;
let clicking = false;

generateGrid();

function addEvents() {
  addEventListener("mouseover", (e) => {
    mouseOver = true;
    console.log("mouse over = " + mouseOver);
  });
  addEventListener("mouseout", (e) => {
    mouseOver = false;
    console.log("mouse over = " + mouseOver);
  });
  addEventListener("mousedown", (e) => {
    clicking = true;
    console.log("clicking = " + clicking);
  });
  addEventListener("mouseup", (e) => {
    clicking = false;
    console.log("clicking = " + clicking);
  });
}

// function colorizeSquare()

function generateGrid() {
  for (let i = 0; i < gridSize; i++) {
    const rowContainer = document.createElement("div");
    columnsContainer.append(rowContainer);

    for (let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      rowContainer.classList.add("row-container");
      rowContainer.append(gridSquare);
      
      gridSquare.addEventListener("mouseover", (e) => {
        mouseOver = true;
        console.log("mouse over = " + mouseOver);
      });
      gridSquare.addEventListener("mouseout", (e) => {
        mouseOver = false;
        console.log("mouse over = " + mouseOver);
      });
      gridSquare.addEventListener("mousedown", (e) => {
        clicking = true;
        console.log("clicking = " + clicking);
      });
      gridSquare.addEventListener("mouseup", (e) => {
        clicking = false;
        console.log("clicking = " + clicking);
      });
      //gridSquare.addEventListener("mouseover", handleMouseOver);
      // gridSquare.addEventListener("mouseenter", handleMouseEnter);
      // gridCell.addEventListener("click", handleClick);
      // gridSquare.addEventListener("click", (e) =>{
      //   console.log(e.target);
      // })
    }
  }
}
