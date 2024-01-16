function nQueens(n) {
  var board = Array.from({ length: n }, () => new Array(n).fill("."));
  var solutions = [];

  var cols = new Set();
  var posDiag = new Set();
  var negDiag = new Set();

  function solve(row) {
    // pre
    if (row === n) {
      solutions.push(board.map((row) => [...row])); // must map and spread the inner arrays or they will be copied by reference
      return;
    }

    // recurse
    for (var col = 0; col < n; col++) {
      if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
        continue;
      }

      cols.add(col);
      posDiag.add(row + col);
      negDiag.add(row - col);
      board[row][col] = "Q";

      solve(row + 1); // go to next row

      cols.delete(col);
      posDiag.delete(row + col);
      negDiag.delete(row - col);
      board[row][col] = ".";
    }
  }

  solve(0);

  return solutions;
}

console.log(nQueens(6));
