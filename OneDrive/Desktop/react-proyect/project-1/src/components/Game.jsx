import { Square } from "./Square";
import { PropTypes } from "prop-types";
export const Game = ({ board, updateBoard }) => {
  return (
    <div className="game">
      {board.map((value, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {value}
          </Square>
        );
      })}
    </div>
  );
};
Game.propTypes = {
  board: PropTypes.array.isRequired,
  updateBoard: PropTypes.func.isRequired,
};
