import { useState } from "react";

const useField = (checkValidation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = checkValidation(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangedHandler = (event) => {
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
    valueChangedHandler,
    valueBlurHandler,
    reset,
  };
};

export default useField;
