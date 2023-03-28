import React from "react";

interface Props {
  name: string;
  id: number;
}

const Employee: React.FunctionComponent<Props> = ({ name, id }) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>{id}</p>
    </li>
  );
};

export default Employee;
