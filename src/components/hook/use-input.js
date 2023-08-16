import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validator(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
