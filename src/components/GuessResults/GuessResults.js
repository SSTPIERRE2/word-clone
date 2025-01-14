import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guessResults">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} results={guesses[num]?.results} />;
      })}
    </div>
  );
}

export default GuessResults;
