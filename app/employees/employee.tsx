import React from "react";

interface Props {
  name: string;
  email: string;
  id: string;
  delete: (id: string) => any
}

const Employee: React.FunctionComponent<Props> = ({ name, email, id }) => {
  delete
  return (
    <li key={id} className="flex gap-5">
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={delete}>Deletay</button>
    </li>
  );
};

export default Employee;
