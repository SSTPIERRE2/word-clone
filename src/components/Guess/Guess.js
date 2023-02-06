import React from "react";
import { range } from "../../utils";

const Guess = ({ results }) => {
  return (
    <p className="guess">
      {range(5).map((n) => (
        <span
          key={n}
          className={`cell ${(results && results[n]?.status) || ""}`}
        >
          {(results && results[n]?.letter) || ""}
        </span>
      ))}
    </p>
  );
};

export default Guess;
