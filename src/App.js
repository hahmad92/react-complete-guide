import React from "react";
import AddUser from "./components/AddUser/AddUser";
import Card from "./components/UI/Card";
import UserList from "./components/UserList/UserList";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        {
          ...user,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />

      <UserList users={users}></UserList>
    </>
  );
}

export default App;
