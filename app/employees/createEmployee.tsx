"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const create = async () => {
    await fetch("http://localhost:3000/api/employees", {
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
    <div>
      <form onSubmit={create}>
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
        <button type="submit">Add employee</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
