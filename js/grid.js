var rows;
var cols;
var workArr;

document.getElementById("btn-makeGrid").addEventListener("click", parseInput);

function parseInput() {
  if (document.getElementById("grid") !== null) {
    deleteGrid();
  }

  var input = document.getElementById("input").value;
  rows = parseInt(document.getElementById("gridRow").value);
  cols = parseInt(document.getElementById("gridCol").value);

  workArr = [];
  for (var i = 0; i < rows; i++) {
    workArr[i] = [];
    for (var j = 0; j < cols; j++) {
      workArr[i][j] = input[i * cols + j];
    }
  }

  makeGrid(workArr);
}

function makeGrid(workArr) {
  var output = document.getElementById("output");
  var table = document.createElement("table");
  table.id = "grid";

  //Line 32-48: Up Shift Button
  var tr = document.createElement("tr");
  table.appendChild(tr);

  var td = document.createElement("td");
  tr.appendChild(td);
  for (var i = 0; i < cols; i++) {
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.className = "shift";
    button.id = "u-" + i;
    button.innerHTML = '<i class="fa fa-angle-up"></i>';
    td.appendChild(button);
    tr.appendChild(td);
  }
  var td = document.createElement("td");
  tr.appendChild(td);

  for (var i = 0; i < rows; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);

    //Line 54-61: Left Shift Button
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.className = "shift";
    button.id = "l-" + i;
    button.innerHTML = '<i class="fa fa-angle-left"></i>';
    td.appendChild(button);
    tr.appendChild(td);

    //Line 63-69: Contents of workArr
    for (var j = 0; j < cols; j++) {
      var td = document.createElement("td");
      var content = document.createTextNode(workArr[i][j]);
      td.appendChild(content);
      tr.appendChild(td);
    }

    //Line 71-78: Right Shift Button
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.className = "shift";
    button.id = "r-" + i;
    button.innerHTML = '<i class="fa fa-angle-right"></i>';
    td.appendChild(button);
    tr.appendChild(td);
  }

  //Line 81-97 : Down Shift Button
  var tr = document.createElement("tr");
  table.appendChild(tr);

  var td = document.createElement("td");
  tr.appendChild(td);
  for (var i = 0; i < cols; i++) {
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.className = "shift";
    button.id = "d-" + i;
    button.innerHTML = '<i class="fa fa-angle-down"></i>';
    td.appendChild(button);
    tr.appendChild(td);
  }
  var td = document.createElement("td");
  tr.appendChild(td);

  output.appendChild(table);

  //Line 101-105: Add Event Listener to each Shift Button
  var shiftButtons = document.getElementsByClassName("shift");
  for (var i = 0; i < shiftButtons.length; i++) {
    shiftButtons[i].addEventListener("click", shiftFunction);
  }
}

function deleteGrid() {
  var grid = document.getElementById("grid");
  grid.remove();
}

function shiftFunction() {
  //Shift Button ID Format
  //Index 0 : Shift direction
  //Index 1 : Dash character (-)
  //Index 2 until end : Index of row/column
  var direction = this.id[0];
  var actIndex = parseInt(this.id.substring(2));
  if (direction === "l") {
    shiftLeft(workArr, actIndex);
  } else if (direction === "r") {
    shiftRight(workArr, actIndex);
  } else if (direction === "u") {
    shiftUp(workArr, actIndex);
  } else if (direction === "d") {
    shiftDown(workArr, actIndex);
  }
}

function shiftUp(workArr, colIndex) {
  for (var i = 0; i < rows - 1; i++) {
    var temp = workArr[i][colIndex];
    workArr[i][colIndex] = workArr[i + 1][colIndex];
    workArr[i + 1][colIndex] = temp;
  }

  deleteGrid();
  makeGrid(workArr);
}

function shiftDown(workArr, colIndex) {
  for (var i = rows - 1; i > 0; i--) {
    var temp = workArr[i][colIndex];
    workArr[i][colIndex] = workArr[i - 1][colIndex];
    workArr[i - 1][colIndex] = temp;
  }

  deleteGrid();
  makeGrid(workArr);
}

function shiftLeft(workArr, rowIndex) {
  for (var i = 0; i < cols - 1; i++) {
    var temp = workArr[rowIndex][i];
    workArr[rowIndex][i] = workArr[rowIndex][i + 1];
    workArr[rowIndex][i + 1] = temp;
  }

  deleteGrid();
  makeGrid(workArr);
}

function shiftRight(workArr, rowIndex) {
  for (var i = cols - 1; i > 0; i--) {
    var temp = workArr[rowIndex][i];
    workArr[rowIndex][i] = workArr[rowIndex][i - 1];
    workArr[rowIndex][i - 1] = temp;
  }

  deleteGrid();
  makeGrid(workArr);
}