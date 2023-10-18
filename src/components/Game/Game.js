import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const handleAddGuess = (guess) => {
    console.log(guessList);
    setGuessList([...guessList, guess]);
  };

  return (
    <>
      <GuessResult guesses={guessList} />
      <GuessInput addGuess={handleAddGuess} />
    </>
  );
}

export default Game;
