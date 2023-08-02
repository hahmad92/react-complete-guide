import React from "react";
import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState([]);
  const [error, setError] = useState(null);

  const onConfirmHandler = () => {
    setError(null);
  };
  const inputChangeHandler = (event) => {
    const inputName = event.target.id;
    const inputValue = event.target.value;
    setUserInput((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (validateInput()) {
      props.onAddUser(userInput);
    }
    setUserInput([]);
  };

  const validateInput = () => {
    if (!userInput || !userInput.username || !userInput.age) {
      setError("Please enter a valid name and age (non-empty values).");
      return false;
    }
    if (+userInput.age < 1) {
      setError("Please enter a valid age (> 0).");
      return false;
    }
    return true;
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title="Invalid Input"
          message={error}
          onConfirm={onConfirmHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={inputChangeHandler}
            value={userInput.username || ""}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={inputChangeHandler}
            value={userInput.age || ""}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
      
    </div>
  );
};

export default AddUser;
