"use client";
import { BsTrash3, BsPencilSquare, BsThreeDots, BsXLg } from "react-icons/bs";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SpinnerCircularFixed } from "spinners-react";
import Link from "next/link";
import { HexColorPicker } from "react-colorful";

interface Props {
  name: string;
  email: string;
  id: string;
  color: string;
  shifts: any;
}

const Employee: React.FunctionComponent<Props> = ({
  name,
  email,
  id,
  color,
  shifts,
}) => {
  const router = useRouter();
  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editColor, setEditColor] = useState(color);
  const [colorPicker, setColorPicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const style = { backgroundColor: editColor };

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

  const IsWorking = () => {
    const shiftsById = shifts.filter((shift: any) => {
      return shift.employeeId === id;
    });
    return shiftsById.find(
      (shift: any) =>
        new Date(shift.timeStart).getTime() >= new Date().getTime()
    );
  };
  const nextShift = IsWorking();

  const editEmployeeOnClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`http://localhost:3000/api/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        inputName,
        inputEmail,
        editColor,
      }),
    });
    router.refresh();
    setLoading(false);
    setEdit(false);
    setColorPicker(false);
  };

  const toggleOptions = () => {
    setShowOptions(() => !showOptions)
  }

  return (
    <div className="border p-6 rounded-md relative">
      <div className=" flex  rounded-md flex-wrap">
        <h2 className="mr-6">
          <Link href={`/employees/${id}`}>{name}</Link>{" "}
          <div
            style={style}
            className={`inline-block h-2 w-2 rounded-full`}
          ></div>
        </h2>
        <p className="mr-6">{email}</p>
        {edit && (
          <div>
            <form
              className="flex flex-col gap-4 p-2 mr-2"
              onSubmit={editEmployeeOnClick}
            >
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
                className="text-black p-2 rounded-lg"
                onChange={(e) => setInputName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                defaultValue={email}
                className="text-black p-2 rounded-lg"
                onChange={(e) => setInputEmail(e.target.value)}
              />

              <div className="flex gap-2 items-center">
                <p>Pick a color:</p>
                <button
                  className="w-6 h-6 rounded-md"
                  style={style}
                  type="button"
                  onClick={() => setColorPicker(!colorPicker)}
                ></button>
              </div>
              {colorPicker && (
                <HexColorPicker color={color} onChange={setEditColor} />
              )}

              <button
                className="border rounded-md font-bold w-fit mx-auto px-2 py-1 hover:bg-black hover:bg-opacity-25"
                type="submit"
              >
                Save
              </button>
            </form>
          </div>
        )}
        {showOptions ? <BsXLg onClick={toggleOptions} className="absolute top-2 right-2" /> : <BsThreeDots onClick={toggleOptions} className="absolute top-2 right-2" />}


        <div className={`${showOptions ? 'flex' : 'hidden'} flex-col gap-3 absolute -right-10 bg-neutral-700 p-2 bottom-3 rounded`}>
          <button
            className="flex items-center justify-center"
            onClick={() => setEdit(!edit)}
          >
            <BsPencilSquare size={"20px"} />
          </button>
          <button
            className="flex items-center justify-center"
            onClick={deleteEmployeeOnClick}
          >
            <BsTrash3 size={"20px"} />
          </button>
        </div>

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
      </div>
      <div>
        <p>
          Next shift:{" "}
          {nextShift !== undefined
            ? new Date(nextShift.timeStart).toLocaleString("en-GB", {
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })
            : "No upcoming shift"}
        </p>
      </div>
    </div>
  );
};

export default Employee;
