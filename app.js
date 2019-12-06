function Cell(row, column, opened, flagged, mined, neighborMinedCount) {
  return {
    id: row + "" + column,
    row,
    column,
    opened,
    flagged,
    mined,
    neighborMinedCount
  };
}

function Board(boardSize) {
  board = {};
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      board[row + "" + column] = Cell(row, column, false, false, false, 0);
    }
  }
  // return board;
  console.log(board);
}

Board(2);
