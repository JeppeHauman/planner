"use client";
import { BsTrash3, BsPencilSquare } from "react-icons/bs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SpinnerCircularFixed } from "spinners-react";
import Link from "next/link";

interface Props {
  name: string;
  email: string;
  id: string;
  color: string;
}

const Employee: React.FunctionComponent<Props> = ({
  name,
  email,
  id,
  color,
}) => {
  const router = useRouter();
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const style = { backgroundColor: color };

  const deleteEmployeeOnClick = async () => {
    setLoading(true);
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
    <tr className="border relative">
      <td className="p-6">
        <h2>
          <Link href={`/employees/${id}`}>{name}</Link>{" "}
          <div style={style} className={`inline-block h-2 w-2`}></div>
        </h2>
      </td>
      <td className="p-6 border-x">
        <p>{email}</p>
      </td>
      {edit && (
        <div>
          <form
            className="flex flex-col gap-4 p-2"
            onSubmit={editEmployeeOnClick}
          >
            <input
              type="text"
              placeholder="Name"
              defaultValue={name}
              className="text-black p-2 "
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              defaultValue={email}
              className="text-black p-2 "
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <button
              className="border rounded-md font-bold w-fit mx-auto px-2 py-1 hover:bg-black hover:bg-opacity-25"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      )}
      <td className="p-6">
        <button
          className="flex items-center justify-center"
          onClick={() => setEdit(!edit)}
        >
          <BsPencilSquare size={"24px"} />
        </button>
      </td>
      <td className="p-6">
        <button
          className="flex items-center justify-center"
          onClick={deleteEmployeeOnClick}
        >
          <BsTrash3 size={"24px"} />
        </button>
      </td>
      {loading && (
        <div
          className={`w-full flex justify-center bg-inherit items-center mb-2 absolute top-0 left-0 h-full`}
        >
          <SpinnerCircularFixed
            size={90}
            thickness={180}
            speed={100}
            color="rgba(118, 57, 172, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      )}
    </tr>
  );
};

export default Employee;
