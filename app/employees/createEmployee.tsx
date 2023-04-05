"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HexColorPicker } from "react-colorful";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [colorPicker, setColorPicker] = useState(false)
  const [color, setColor] = useState("#1c00ff");

  const router = useRouter();

  const create = async () => {
    await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        color
      }),
    });

    setName("");
    setEmail("");

    router.refresh();
  };

  
  const style = { backgroundColor: color }
  
  return (
    <div className="mt-3">
      <form
        className="flex flex-col gap-4 w-2/3 max-w-2xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          create();
        }}
      >
        <h3>Add new employee</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="p-2 text-black"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="p-2 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={style} className="w-24 pr-2 rounded-lg">
          <button className="bg-black" onClick={() => setColorPicker(!colorPicker)}>Pick a color:</button>

        </div>
        {colorPicker && <HexColorPicker color={color} onChange={setColor} />}

        <button
          className="border rounded-md font-bold w-fit mx-auto p-2 hover:bg-black hover:bg-opacity-25"
          type="submit"
        >
          Add employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
