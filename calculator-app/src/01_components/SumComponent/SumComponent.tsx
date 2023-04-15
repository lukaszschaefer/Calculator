import React, { useState } from "react";
import styles from "./SumComponent.module.css";

const SumComponent: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState<number | string>();
  const [selectedAction, setSelectedAction] = useState<string>("sum");

  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };

  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAction(event.target.value);
  };

  const sumNumbers = () => {
    if (selectedAction === "sum") {
      setResult(number1 + number2);
    }
    if (selectedAction === "subtract") {
      setResult(number1 - number2);
    }
    if (selectedAction === "multiply") {
      setResult(number1 * number2);
    }
    if (selectedAction === "divide") {
      setResult(number1 / number2);
    }
    if (selectedAction === "divide" && number2 == 0) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className={styles.mainContent}>
        <h1>Sum</h1>
        <select value={selectedAction} onChange={handleActionChange}>
          <option value="sum">Sum</option>
          <option value="divide">Divide</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>
        <div>
          <input onChange={handleNumber1Change} className={styles.input} />
          <input onChange={handleNumber2Change} className={styles.input} />
        </div>
        <button onClick={sumNumbers} className={styles.button}>
          Enter
        </button>
        <p className={styles.result}>{result}</p>
      </div>
    </>
  );
};

export default SumComponent;
