import React from "react";

const firstRow = "QWERTYUIOP";
const secondRow = "ASDFGHJKL";
const thirdRow = "ZXCVBNM";

function Keyboard({ letterStatuses }) {
  return (
    <div className="keyboardWrapper">
      <div className="keyboardRow">
        {firstRow.split("").map((l, i) => (
          <span key={i} className={`keyboardCell ${letterStatuses[l] || ""}`}>
            {l}
          </span>
        ))}
      </div>
      <div className="keyboardRow">
        {secondRow.split("").map((l, i) => (
          <span key={i} className={`keyboardCell ${letterStatuses[l] || ""}`}>
            {l}
          </span>
        ))}
      </div>
      <div className="keyboardRow">
        {thirdRow.split("").map((l, i) => (
          <span key={i} className={`keyboardCell ${letterStatuses[l] || ""}`}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
