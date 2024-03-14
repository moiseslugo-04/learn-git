import { Square } from "./Square";
import "../consts";
export const Points = ({ pointsX, pointsO }) => {
  return (
    <div className="turn box">
      <div className="points">
        <Square>{pointsX}</Square>
        <Square>{pointsO}</Square>
      </div>
    </div>
  );
};
