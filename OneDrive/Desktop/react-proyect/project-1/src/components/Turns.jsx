import { Square } from "./Square";
import "../consts";
import { TURNS } from "../consts";
export const Turns = ({ turn }) => {
  return (
    <div className="turn">
      <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
      <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
    </div>
  );
};
