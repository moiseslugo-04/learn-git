import { Square } from "./Square";

export const ModalWinner = ({ winner, resetGame }) => {
  if (winner == null) return;
  const text = winner === false ? "TIE" : "Winner";
  return (
    <div className="winner">
      <header className="text">
        <h1>{text}</h1>
        <Square>{winner ? winner : ":("}</Square>
      </header>
      <footer>
        <button onClick={resetGame}>Play Again</button>
      </footer>
    </div>
  );
};
