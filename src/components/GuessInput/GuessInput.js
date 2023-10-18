import React from 'react';

function GuessInput({addGuess}) {
  const [inputValue, setInputValue] = React.useState('')
  return <form onSubmit={(event) => {
    event.preventDefault();

    console.log(inputValue);
    addGuess(inputValue);
    setInputValue('')
  }}>
    <label htmlFor="guess-input">Enter guess: </label>
    <div></div>
    <input id="guess-input" maxLength={5} value={inputValue} onChange={(event) => {
      setInputValue(event.target.value.toUpperCase())
    }}></input>
  </form>;
}

export default GuessInput;
