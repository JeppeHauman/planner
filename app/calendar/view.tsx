"use client";

import { useState } from "react";
import ExpandedWeek from "./expandedWeek";
import Month from "./month";

interface Props {
  shifts: any;
  employees: any;
}

const View = ({ shifts, employees }: Props) => {
  const [weekView, setWeekView] = useState(true);
  return (
    <div>
      <button onClick={() => setWeekView(true)}>Week</button>
      <button onClick={() => setWeekView(false)}>Month</button>
      {weekView ? (
        <ExpandedWeek shifts={shifts} employees={employees} />
      ) : (
        <Month shifts={shifts} employees={employees} />
      )}
    </div>
  );
};
export default View;
