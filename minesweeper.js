document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells [ row. col, imMine, isMarked ]

};




document.getElementByClass('board');

document.onclick = inputChange;

//function inputChange(cells) {
  //board.textContent = `cells: (${isMine}, ${isMarked})`;
}









//window.onload = function (){
  //startGame ()
    //document.getElementById('cells').rightClick = function changeContent() {

      // document.getElementById('class').innerHTML = "cells";
      // document.getElementById('id').style = "board";
  //  }
	
//	for(var i=0;i<cells.length;i+=1){
//		  if(cells[i].innerHTML === " ") {







function startGame () {
  // Don't remove this function call: it makes the game work!
    for(i = 0; i < board.cells.lenght; i++){
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(i = 0; i < board.cells.lenght; i++){

    if(board.cells[i].isMine && board.cells.isMarked === true){
        return "You win"
    }
      else if(board.cells[i].isMarked && board.cells.isMine === true) {
        return "Boom"
      } 
    } 

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines () {
}


