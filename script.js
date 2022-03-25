// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows++;

    let table = document.getElementById('grid');

    let row = table.insertRow(-1);
    for(let i = 0; i < numCols; i++){
        let cell = row.insertCell(-1);
        cell.onclick = (e) => {e.target.style.backgroundColor = colorSelected}
    }
}

// Add a column
function addC() {
    numCols++;

    let rows = document.getElementById('grid').rows;

    for(let i = 0; i < numRows; i++){
        let cell = rows[i].insertCell(-1);
        cell.onclick = (e) => {e.target.style.backgroundColor = colorSelected}
    }
}

// Remove a row
function removeR() {

}

// Remove a column
function removeC() {

}

// Set global variable for selected color
function selectColor(){
}

// Fill all uncolored cells
function fillU(){

}

// Fill all cells
function fillAll(){

}

// Clear all cells
function clearAll(){

}