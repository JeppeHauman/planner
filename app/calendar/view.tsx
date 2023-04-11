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
      <button onClick={() => setWeekView(true)}>Week</button>
      <button onClick={() => setWeekView(false)}>Month</button>
      {weekView ? (
        <ExpandedWeek shifts={shifts} employees={employees} />
      ) : (
        <MonthTwo shifts={shifts} />
      )}
    </div>
  );
};
export default View;
