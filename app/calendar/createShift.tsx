"use client";

import dayjs from "dayjs";
import { ChangeEvent, ReactEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";

interface Props {
  employees: any[];
}

const CreateShift = ({ employees }: Props) => {
  const employeeRef = useRef("");
  const dateRef = useRef("");
  const hourStartRef = useRef("08");
  const minuteStartRef = useRef("00");
  const hourEndRef = useRef("08");
  const minuteEndRef = useRef("00");

  const router = useRouter();

  const onSubmit = async () => {
    const timeStart = dayjs(
      `${dateRef.current}T${hourStartRef.current}:${minuteStartRef.current}`
    ).format();
    const timeEnd = dayjs(
      `${dateRef.current}T${hourEndRef.current}:${minuteEndRef.current}`
    ).format();

    const employeeId: number = employees[Number(employeeRef.current)].id;
    const employeeName: number = employees[Number(employeeRef.current)].name;

    await fetch("/api/shifts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        timeStart,
        timeEnd,
        employeeId,
        employeeName,
      }),
    });

    router.refresh();
  };

  const handleEmployeeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    employeeRef.current = e.target.value;
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    dateRef.current = e.target.value;
  };
  const handleTimeChange = (
    e: ChangeEvent<HTMLSelectElement>,
    time: string
  ) => {
    switch (time) {
      case "minuteStart":
        minuteStartRef.current = e.target.value;

        break;
      case "minuteEnd":
        minuteEndRef.current = e.target.value;
        break;
      case "hourStart":
        hourStartRef.current = e.target.value;
        break;
      case "hourEnd":
        hourEndRef.current = e.target.value;

        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col mt-4">
      <select
        onChange={handleEmployeeChange}
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300
         focus:border-gray-300 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
        name="employees"
        id="employee-select"
      >
        <option value="">Select an employee</option>
        {employees.map((employee: any, index: number) => (
          <option key={employee.id} value={index}>
            {employee.name}
          </option>
        ))}
      </select>
      <label htmlFor="date-select">Choose date:</label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
        type="date"
        id="date-select"
        onChange={handleDateChange}
      />
      <label htmlFor="time-start-select">Choose start time:</label>
      <div className="inline-flex justify-center text-lg border rounded-md shadow-lg p-2">
        <select
          name="time-start-select"
          id="time-start-select"
          className="px-2 outline-none appearance-none bg-transparent"
          defaultValue={"08"}
          onChange={(e) => handleTimeChange(e, "hourStart")}
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </select>
        <span className="px-2">:</span>
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-transparent"
          defaultValue={"00"}
          onChange={(e) => handleTimeChange(e, "minuteStart")}
        >
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </div>
      <label htmlFor="time-end-select">Choose end time:</label>
      <div className="inline-flex justify-center text-lg border rounded-md shadow-lg p-2">
        <select
          name="time-end-select"
          id="time-end-select"
          className="px-2 outline-none appearance-none bg-transparent"
          defaultValue={"08"}
          onChange={(e) => handleTimeChange(e, "hourEnd")}
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
        </select>
        <span className="px-2">:</span>
        <select
          name=""
          id=""
          className="px-2 outline-none appearance-none bg-transparent"
          defaultValue={"00"}
          onChange={(e) => handleTimeChange(e, "minuteEnd")}
        >
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
      </div>
      <button
        className="border rounded-md font-bold mx-auto p-2 hover:bg-black hover:bg-opacity-25 mt-6 w-1/2"
        onClick={onSubmit}
      >
        Create
      </button>
    </div>
  );
};

export default CreateShift;
