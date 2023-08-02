import React from "react";
import { useState } from "react";
import styles from "./ResultInput.module.css";

const initialUserInput = {
  currentSavings: 100000,
  yearlyContribution: 200000,
  expectedReturn: 18,
  duration: 10,
};

const ResultInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (event) => {
    const inputName = event.target.id;
    const inputValue = event.target.value;
    setUserInput((prevState) => {
      return { ...prevState, [inputName]: +inputValue };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="currentSavings">Current Savings ($)</label>
          <input
            type="number"
            id="currentSavings"
            value={userInput.currentSavings}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearlyContribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearlyContribution"
            value={userInput.yearlyContribution}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expectedReturn">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <p className={styles.action}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default ResultInput;
