import React, { useState } from "react";
import styles from "./SubtractionComponent.module.css";

const SubtractionComponent: React.FC = () => {
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

  const SubtractionNumbers = () => {
    const result = number1 - number2;
    setResult(result);
    setArray((prevArray) => [...prevArray, result]);
  };

  return (
    <div className={styles.mainContent}>
      <h1>Subtraction</h1>
      <div>
        <input onChange={handleNumber1Change} className={styles.input} />
        <input onChange={handleNumber2Change} className={styles.input} />
      </div>
      <button className={styles.button} onClick={SubtractionNumbers}>
        Enter
      </button>
      <p className={styles.result}>{result}</p>

      <div className={styles.arrayContainer}>
        <p>Result:</p>
        {array.map((item, index) => (
          <p key={index} className={styles.array}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubtractionComponent;
