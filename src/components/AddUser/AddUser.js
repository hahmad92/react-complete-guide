import React from "react";
import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Card from "../UI/Card";

const AddUser = (props) => {
  const userNameRef = useRef();
  const ageRef = useRef();

  // const [userInput, setUserInput] = useState([]);
  const [error, setError] = useState(null);

  const onConfirmHandler = () => {
    setError(null);
  };

  // const inputChangeHandler = (event) => {
  //   const inputName = event.target.id;
  //   const inputValue = event.target.value;
  //   setUserInput((prevState) => {
  //     return { ...prevState, [inputName]: inputValue };
  //   });
  // };

  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   if (validateInput()) {
  //     props.onAddUser(userInput);
  //   }
  //   setUserInput([]);
  // };

  // const validateInput = () => {
  //   if (!userInput || !userInput.username || !userInput.age) {
  //     setError("Please enter a valid name and age (non-empty values).");
  //     return false;
  //   }
  //   if (+userInput.age < 1) {
  //     setError("Please enter a valid age (> 0).");
  //     return false;
  //   }
  //   return true;
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = userNameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser({
      name: enteredUserName,
      age: enteredAge,
    });
    userNameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirmHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={userNameRef} />

          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
