// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows++;
    if(numCols === 0) numCols++;

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

    if(numRows === 0){
        numRows++;
        let table = document.getElementById('grid');
        table.insertRow(-1);
    }

    let rows = document.getElementById('grid').rows;
    for(let i = 0; i < numRows; i++){
        let cell = rows[i].insertCell(-1);
        cell.onclick = (e) => {e.target.style.backgroundColor = colorSelected}
    }
}

// Remove a row
function removeR() {
    if(numRows > 0) numRows--;
    if(numRows === 0) numCols = 0;

    let table = document.getElementById('grid');

    table.deleteRow(-1);
}

// Remove a column
function removeC() {
    if(numCols > 0) numCols--;
    if(numCols === 0) numRows = 0;

    let rows = document.getElementById('grid').rows;

    for(let i = 0; i < numRows; i++){
        rows[i].deleteCell(-1);
    }

    if(numRows === 0){
        table.deleteRow(-1);
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
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