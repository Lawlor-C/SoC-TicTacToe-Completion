// This file is purely to test out winning combo functions and not get confused in the main app!

// Winning Conditions (Grid position and the equivalent Zero-Index)
// Rows:
// 123 → [0, 1, 2]
// 456 → [3, 4, 5]
// 789 → [6, 7, 8]
// Columns:
// 147 → [0, 3, 6]
// 258 → [1, 4, 7]
// 369 → [2, 5, 8]
// Diagonals:
// 159 → [0, 4, 8]
// 357 → [2, 4, 6]

//Keeping the R/C/D separate for late-stage implementation of win condition text/CSS, whether that's a good idea or not, remains to be seen.
export const winGame = {
  winRows: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
  winCols: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ],
  winDiags: [
    [0, 4, 8],
    [2, 4, 6],
  ],
};

//Need a function to check for the winning combos
export function winningCombos() {
  return [...winGame.winRows, ...winGame.winCols, ...winGame.winDiags];
}

//Now to work out how to check whether either player has triggered any of the above.
//Tiles are either null X or O - obvs null needs negating from the win conditions else we'd never get started.
//State of the [tiles] are tracked in the Grid function onClick so need to integrate the winningCombos into the same onClick as it updates
//Will need to add a new State for if someone has won, preventing further play.
//This will also need to feed into the onClick as everything is essentially boiled down to whether play can continue (X/O already sorted)
//Trigger an alert or update of some sort to confirm Win (variations on this to come once functional...)
//Add a Stalemate scenario once all nulls are gone and if no winner

export function checkWinner(tiles, player) {
  const allCombos = winningCombos();
  return allCombos.some((combo) =>
    combo.every((index) => tiles[index] === player)
  );
}

//Once functional, CSS updates to show which tiles won.
