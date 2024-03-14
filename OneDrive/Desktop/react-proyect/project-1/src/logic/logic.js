import { WINNERS } from "../consts";

export const checkWinner = (board) => {
  for (let combo of WINNERS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
};
export const endGame = (board) => board.every((i) => i !== null);
