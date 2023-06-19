import React, { useState } from "react";

import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={styles.wrapper}>
      <span
        className={styles.showInput}
      >
        {input}
      </span>
      <div className={styles.digits}>{calcBtns}</div>
      <div className={styles.modifiers}>
        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className={styles.operations}>
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          -
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          *
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          /
        </button>

        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
