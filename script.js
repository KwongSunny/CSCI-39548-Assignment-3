// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows++;

    if(numCols > 0 && numRows > 0){
        let table = document.getElementById('grid');

        let row = table.insertRow(-1);
    }
}

// Add a column
function addC() {
    numCols++;

    if(numCols > 0 && numRows > 0){
        let rows = document.getElementById('grid').rows;
        console.log(rows[0]);

        for(let i = 0; i < numCols; i++){

        }
    }
}

// Remove a row
function removeR() {
    if(numRows > 0) numRows--;
}

// Remove a column
function removeC() {
    if(numCols > 0) numCols--;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}