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

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomlyAssignMines = (board, boardSize, mineCount) => {
  const mineCoordinates = [];
  for (let i = 0; i < mineCount; i++) {
    let randomRowCoordinate = getRandomInteger(0, boardSize);
    let randomColumnCoordinate = getRandomInteger(0, boardSize);
    let cell = randomRowCoordinate + "" + randomColumnCoordinate;
    while (mineCoordinates.includes(cell)) {
      randomRowCoordinate = getRandomInteger(0, boardSize);
      randomColumnCoordinate = getRandomInteger(0, boardSize);
      cell = randomRowCoordinate + "" + randomColumnCoordinate;
    }
    mineCoordinates.push(cell);
    board[cell].mined = true;
  }
  return board;
};

function Board(boardSize, mineCount) {
  board = {};
  for (let row = 0; row < boardSize; row++) {
    for (let column = 0; column < boardSize; column++) {
      board[row + "" + column] = Cell(row, column, false, false, false, 0);
    }
  }
  board = randomlyAssignMines(board, boardSize, mineCount);
  // return board;
  console.log(board);
}

Board(3, 5);
