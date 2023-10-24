import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import { NUM_OF_GUESSES_ALLOWED, PriorityStatus } from "../../constants";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
const makeAnswer = () => {
  const word = sample(WORDS);
  console.info({ answer: word });
  return word;
};

function Game() {
  const [answer, setAnswer] = React.useState(makeAnswer);
  const [guessList, setGuessList] = React.useState([]);
  const [isUserWin, setIsUserWin] = React.useState(false);
  const [statusMapByKey, setStatusMapByKey] = React.useState({});
  const handleAddGuess = (guess) => {
    if (guess.length !== 5) {
      return;
    }

    if (answer === guess) {
      setIsUserWin(true);
    }

    const checkedResult = checkGuess(guess, answer);
    const newStatusMapByKey = { ...statusMapByKey };
    checkedResult.forEach(({ letter, status }) => {
      const currentStatus = PriorityStatus[status];
      if (!newStatusMapByKey[letter]) {
        newStatusMapByKey[letter] = status;
      } else if (PriorityStatus[newStatusMapByKey[letter]] < currentStatus) {
        newStatusMapByKey[letter] = status;
      }
    });

    setStatusMapByKey(newStatusMapByKey);
    setGuessList([...guessList, checkGuess(guess, answer)]);
  };
  const handleReset = () => {
    setAnswer(makeAnswer);
    setIsUserWin(false);
    setGuessList([]);
    setStatusMapByKey({});
  };
  const isFinished = isUserWin || guessList.length >= NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResult guesses={guessList} />
      <GuessInput addGuess={handleAddGuess} isFinished={isFinished} />
      <Keyboard statusMapByKey={statusMapByKey} />
      <Banner
        isUserWin={isUserWin}
        isFinished={isFinished}
        resetGame={handleReset}
      />
    </>
  );
}

export default Game;
