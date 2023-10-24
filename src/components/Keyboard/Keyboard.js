import React from "react";

const keyboardLayoutMap = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ statusMapByKey }) {
  return (
    <div className="keyboard">
      {keyboardLayoutMap.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((cell) => {
            const status = statusMapByKey[cell];
            const buttonClassName = status
              ? `keyboard-button ${status}`
              : "keyboard-button";
            return (
              <button key={cell} className={buttonClassName}>
                {cell}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
