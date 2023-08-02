import React from "react";
import { useState } from "react";

import User from "./User";

import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} id={user.id} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
