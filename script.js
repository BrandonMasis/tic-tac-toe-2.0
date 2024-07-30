const gameController = (function () {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];

  function createPlayer(name, mark) {
    let score = 0;

    function scoreUp() {
      this.score++;
    }

    return { name, mark, score, scoreUp };
  }

  const addMark = (row, cell, mark) => {
    let target = board[row][cell];

    if (target != ' ') {
      alert('Select an empty cell');
    } else {
      board[row][cell] = mark;
      console.table(board);
    }
  };

  const computerTurn = () => {
    const random = () => {
      return Math.floor(Math.random() * 3);
    };

    addMark(random(), random(), 'o');
  };

  return { board, createPlayer, addMark, computerTurn };
})();

// This a game in turns, when it's my turn I can place my marker,
// in an empty space, the same for the other user, and when,
// one of the players marks 3 in a row, vertically,horizontally, or diagonally,
// he wins that round and gets a point.
// the game keeps playing rounds till a player gets 3 points

// need to keep track of the state of the game
// scores

// need to keep track of each turn of the game,
