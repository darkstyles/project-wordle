import React from 'react';

function GuessResult({guesses}) {
  return <div>
  {guesses.map((guess) => {
    <p>{guess}</p>
  })}
</div>;
}

export default GuessResult;
