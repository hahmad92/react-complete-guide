import React from "react";

const User = (props) => {
  return (
    <li key={props.id}>
      {props.name} ({props.age} years old)
    </li>
  );
};
export default User;
