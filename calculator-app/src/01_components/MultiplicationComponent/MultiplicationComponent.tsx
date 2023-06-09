import React, { useState } from "react";
import styles from "./MultiplicationComponent.module.css";

const MultiplicationComponent: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const [array, setArray] = useState<number[]>([]);

  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };

  const multiplyNumbers = () => {
    const result = number1 * number2;
    setResult(result);
    setArray((prevArray) => [...prevArray, result]);
    console.log(result);
  };
  console.log(array);

  return (
    <>
      <div className={styles.mainContent}>
        <h1>Multiplication</h1>
        <div>
          <input
            value={number1}
            onChange={handleNumber1Change}
            className={styles.input}
          />
          <input
            value={number2}
            onChange={handleNumber2Change}
            className={styles.input}
          />
        </div>
        <button onClick={multiplyNumbers} className={styles.button}>
          Enter
        </button>
        <p className={styles.result}>{result}</p>

        <div className={styles.arrayContainer}>
          <p>Results:</p>
          {array.map((item, index) => (
            <p key={index} className={styles.array}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultiplicationComponent;
