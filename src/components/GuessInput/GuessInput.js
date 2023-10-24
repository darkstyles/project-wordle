import React from "react";

function GuessInput({ addGuess, isFinished }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        console.log({
          guess: inputValue,
        });
        addGuess(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <div></div>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={inputValue}
        disabled={isFinished}
        onChange={(event) => {
          setInputValue(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
