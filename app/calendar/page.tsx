import Link from "next/link";
import Shift from "./shift";
import dayjs from "dayjs";
import "dayjs/locale/da";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Day from "./day";
import CreateShift from "./createShift";

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
    <div className="h-[60vh] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-0 sm:gap-y-6 text-center text-neutral-300">
      <Day day="Monday" shifts={shifts} employees={employees} />
      <Day day="Tuesday" shifts={shifts} employees={employees} />
      <Day day="Wednesday" shifts={shifts} employees={employees} />
      <Day day="Thursday" shifts={shifts} employees={employees} />
      <Day day="Friday" shifts={shifts} employees={employees} />
      <Day day="Saturday" shifts={shifts} employees={employees} />
      <Day day="Sunday" shifts={shifts} employees={employees} />
      <CreateShift employees={employees} />
    </div>
  );
}
