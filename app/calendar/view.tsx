"use client";

import { useState } from "react";
import ExpandedWeek from "./expandedWeek";
import Month from "./month";
import MonthTwo from "./monthTwo";

interface Props {
  shifts: any;
  employees: any;
}

const View = ({ shifts, employees }: Props) => {
  const [weekView, setWeekView] = useState(true);
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
      {weekView ? (
        <ExpandedWeek shifts={shifts} employees={employees} />
      ) : (
        <MonthTwo weekview={weekView} shifts={shifts} />
      )}
    </div>
  );
};
export default View;
