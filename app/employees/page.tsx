"use client";

import Link from "next/link";
import Employee from "./employee";
import React, { useState } from "react";

function Employees() {
  const [employeeName, setEmployeeName] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeName(e.target.value);
  };

  const newEmployee = () => {
    console.log("new employee");
  };
  return (
    <div>
      <h1>Employees</h1>
      <Link href={"/"}>Home</Link>
      <input
        onChange={onChange}
        type="text"
        name="newEmployeeName"
        id="newEmployeeName"
      />

      <button onClick={newEmployee}>add</button>

      <div>
        <ul>
          <Employee name={"Nima"} id={0} />
        </ul>
      </div>
    </div>
  );
}

export default Employees;
