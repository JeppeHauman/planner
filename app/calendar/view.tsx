"use client";

import { useState } from "react";
import ExpandedWeek from "./expandedWeek";
import Month from "./month";
import MonthTwo from "./monthTwo";
import CreateShift from "./createShift";

interface Props {
  shifts: any;
  employees: any;
}

const View = ({ shifts, employees }: Props) => {
  const [weekView, setWeekView] = useState(true);
  const [createView, setCreateView] = useState(false);
  const currentDate = new Date();

  return (
    <div>
      <button
        onClick={() => setWeekView(true)}
        className={`border rounded-l-md font-bold w-fit mx-auto p-2 ${
          !weekView && "hover:bg-opacity-25 hover:bg-black"
        } ${weekView && "bg-neutral-500 hover:bg-neutral-500"}`}
      >
        Week
      </button>
      <button
        onClick={() => setWeekView(false)}
        className={`border rounded-r-md font-bold w-fit mx-auto p-2 ${
          weekView && "hover:bg-opacity-25 hover:bg-black"
        } ${
          !weekView &&
          "bg-neutral-500 hover:bg-neutral-500 hover:bg-opacity-100"
        }`}
      >
        Month
      </button>

      <button
        onClick={() => setCreateView(!createView)}
        className={`border rounded-md font-bold w-fit mx-auto p-2 ml-6 ${
          createView &&
          "bg-neutral-500 hover:bg-neutral-500 hover:bg-opacity-100"
        } ${!createView && "hover:bg-black hover:bg-opacity-25"}`}
      >
        {createView ? "Close" : "Create shift"}
      </button>
      {createView && (
        <div className="max-w-sm">
          <CreateShift employees={employees} />
        </div>
      )}
      {weekView ? (
        <ExpandedWeek shifts={shifts} employees={employees} />
      ) : (
        <MonthTwo weekview={weekView} shifts={shifts} />
      )}
    </div>
  );
};
export default View;
