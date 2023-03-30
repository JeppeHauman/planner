"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
      }),
    });

    setName("");
    setEmail("");

    router.refresh();
  };

  return (
    <div className="">
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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
