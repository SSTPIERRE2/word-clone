import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";

function Game() {
  // Pick a random word when component mounts.
  const [answer, setAnswer] = useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);
  const [letterStatuses, setLetterStatuses] = useState({});

  const restart = () => {
    setGuesses([]);
    setGameStatus(null);
    setLetterStatuses({});
    setAnswer(sample(WORDS));
  };

  return (
    <>
      {gameStatus === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
          <button className="restartButton" onClick={restart}>
            RESTART
          </button>
        </div>
      )}
      {gameStatus === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="restartButton" onClick={restart}>
            RESTART
          </button>
        </div>
      )}
      Wordle Clone
      <GuessResults guesses={guesses} />
      <GuessForm
        guesses={guesses}
        setGuesses={setGuesses}
        setGameStatus={setGameStatus}
        answer={answer}
        gameStatus={gameStatus}
        letterStatuses={letterStatuses}
        setLetterStatuses={setLetterStatuses}
      />
      <Keyboard letterStatuses={letterStatuses} />
    </>
  );
}

export default Game;
