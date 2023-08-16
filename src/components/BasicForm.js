import useInput from "./hook/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameInputValue,
    isValid: firstNameInputIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    valueBlurHandler: firstNameInputBlurHandler,
    reset: firstNameInputReset,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: lastNameInputValue,
    isValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput("", (value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstNameInputValue);
    console.log(lastNameInputValue);
    console.log(emailInputValue);
    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameInputValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameInputValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailInputValue}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
