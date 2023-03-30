import React from "react";

interface Props {
  name: string;
  email: string;
}

const Employee: React.FunctionComponent<Props> = ({ name, email }) => {
  return (
    <li className="flex gap-5">
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Employee;
