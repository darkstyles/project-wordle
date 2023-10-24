import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const letters = guess ?? [];
  return (
    <p className="guess">
      {range(5).map((index) => {
        const { letter, status } = letters[index] ?? { letter: "", status: "" };
        const cellClassName = status ? `cell ${status}` : "cell";
        return (
          <span className={cellClassName} key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
