import Link from "next/link";
import Shift from "./shift";
import dayjs from "dayjs";
import "dayjs/locale/da";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Day from "./day";
import CreateShift from "./createShift";
import ExpandedWeek from "./expandedWeek";
import Month from "./month";
import View from "./view";

interface DayProps {
  day: string;
}

const getShifts = async () => {
  const data = await fetch("http://localhost:3000/api/shifts/", {
    cache: "no-store",
  });
  return data.json();
};
const getEmployees = async () => {
  const data = await fetch("http://localhost:3000/api/employees/", {
    cache: "no-store",
  });
  return data.json();
};

export default async function Calendar() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.utc();

  const { shifts } = await getShifts();

  const { employees } = await getEmployees();

  return (
    <div>
      <View shifts={shifts} employees={employees} />

      <div className="max-w-sm">
        <CreateShift employees={employees} />
      </div>
    </div>
  );
}
