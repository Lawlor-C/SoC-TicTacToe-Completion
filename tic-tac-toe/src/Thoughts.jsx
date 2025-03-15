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

export const winGame = {
  winRows: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7.8],
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
