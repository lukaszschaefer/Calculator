import React, { useState } from "react";
import styles from "./DivisionComponent.module.css";

const DivisionComponent: React.FC = () => {
  const [numberInput1, setNumberInput1] = useState<number>(0);
  const [numberInput2, setNumberInput2] = useState<number>(0);
  const [result, setResult] = useState<number>();
  const [resultsArray, setResultsArray] = useState<number[]>([]);

  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput1(Number(event.target.value));
  };

  const handleNumber2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput2(Number(event.target.value));
  };

  const divisionNumbers = () => {
    const result = numberInput1 / numberInput2;
    setResult(result);
    setResultsArray((prevArray) => [...prevArray, result]);
  };

  return (
    <div className={styles.mainContent}>
      <h2>Division</h2>
      <form>
        <input
          type="number"
          onChange={handleNumber1Change}
          className={styles.input}
        />
        <input
          type="number"
          onChange={handleNumber2Change}
          className={styles.input}
        />
      </form>
      <button onClick={divisionNumbers} className={styles.button}>
        Enter
      </button>
      <output className={styles.result}>{result}</output>
      <div className={styles.arrayContainer}>
        <p>Results:</p>
        {resultsArray.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DivisionComponent;

//import React, { useState } from "react";
//import styles from "./DivisionComponent.module.css";
//
//const DivisionComponent: React.FC = () => {
//  const [numberInput1, setNumberInput1] = useState<number>(0);
//  const [numberInput2, setNumberInput2] = useState<number>(0);
//  const [result, setResult] = useState<number>();
//  const [resultsArray, setResultsArray] = useState<number[]>([]);
//
//  const handleOnChange = (
//    event: React.ChangeEvent<HTMLInputElement>,
//    stateSetter: React.Dispatch<React.SetStateAction<number>>
//  ) => {
//    const value = Number(event.target.value);
//    stateSetter(value);
//  };
//
//  const divisionNumbers = () => {
//    const result = numberInput1 / numberInput2;
//    setResult(result);
//    setResultsArray((prevArray) => [...prevArray, result]);
//  };
//
//  return (
//    <div className={styles.mainContent}>
//      <h2>Division</h2>
//      <form>
//        <input
//          type="number"
//          onChange={(event) => handleOnChange(event, setNumberInput1)}
//          className={styles.input}
//        />
//        <input
//          type="number"
//          onChange={(event) => handleOnChange(event, setNumberInput2)}
//          className={styles.input}
//        />
//      </form>
//      <button onClick={divisionNumbers} className={styles.button}>
//        Enter
//      </button>
//      <output className={styles.result}>{result}</output>
//      <div className={styles.arrayContainer}>
//        <p>Results:</p>
//        {resultsArray.map((item, index) => (
//          <p key={index}>{item}</p>
//        ))}
//      </div>
//    </div>
//  );
//};
//
//export default DivisionComponent;
