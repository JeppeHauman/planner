"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  email: string;
  id: string;
}

const Employee: React.FunctionComponent<Props> = ({ name, email, id }) => {
  const router = useRouter();
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [edit, setEdit] = useState(false);

  const deleteEmployeeOnClick = async () => {
    await fetch(`http://localhost:3000/api/employees/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    router.refresh();
  };

  const editEmployeeOnClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/api/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        inputName,
        inputEmail,
      }),
    });
    router.refresh();
    setEdit(false);
  };

  return (
    <tr className="border">
      <td className="p-6">
        <h2>{name}</h2>
      </td>
      <td className="p-6 border-x">
        <p>{email}</p>
      </td>
      <td className="p-6">
        <button onClick={() => setEdit(!edit)}>Edit</button>
        {edit && (
          <div>
            <form onSubmit={editEmployeeOnClick}>
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
                className="text-black"
                onChange={(e) => setInputName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                defaultValue={email}
                className="text-black"
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        )}
      </td>
      <td className="p-6">
        <button className="" onClick={deleteEmployeeOnClick}>
          Deletay
        </button>
      </td>
    </tr>
  );
};

export default Employee;
