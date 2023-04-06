import React, { useState } from "react";

const MultiplicationComponent: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(Number(event.target.value));
  };

  const multiplyNumbers = () => {
    const result = number1 * number2;
    setResult(result);
  };

  return (
    <>
      <h1>Multiplication</h1>
      <input type="number" value={number1} onChange={handleNumber1Change} />
      <input type="number" value={number2} onChange={handleNumber2Change} />
      <button onClick={multiplyNumbers}>Enter</button>
      <h1>{result}</h1>
    </>
  );
};

export default MultiplicationComponent;
