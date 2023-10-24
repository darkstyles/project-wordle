import React from "react";

function Banner({ isFinished, isUserWin, resetGame }) {
  const showHappyBanner = isFinished && isUserWin;
  const showSadBanner = isFinished && !isUserWin;
  return (
    <>
      {showHappyBanner && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
      {showSadBanner && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </>
  );
}

export default Banner;
