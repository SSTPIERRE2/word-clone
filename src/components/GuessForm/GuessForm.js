import React, { useState } from "react";
import { checkGuess } from "../../game-helpers";

const GuessForm = ({
  guesses,
  setGuesses,
  setGameStatus,
  answer,
  gameStatus,
  letterStatuses,
  setLetterStatuses,
}) => {
  const [guess, setGuess] = useState("");

  const handleGuess = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      alert("Guess must be 5 letters");
      return;
    }

    const results = checkGuess(guess, answer);
    setGuesses([
      ...guesses,
      { id: crypto.randomUUID(), label: guess, results },
    ]);
    setGuess("");

    if (results) {
      let correctLetters = 0;
      const nextLetterStatuses = { ...letterStatuses };

      results.forEach((result) => {
        nextLetterStatuses[result.letter] = result.status;
        if (result.status === "correct") {
          correctLetters++;
        }
      });

      setLetterStatuses(nextLetterStatuses);

      if (correctLetters === 5) {
        setGameStatus("win");
      } else if (correctLetters !== 5 && guesses.length === 5) {
        setGameStatus("lose");
      }
    }
  };

  return (
    <form onSubmit={handleGuess}>
      <label htmlFor="guess"></label>
      <input
        id="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        disabled={!!gameStatus}
      />
    </form>
  );
};

export default GuessForm;
