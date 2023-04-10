import Day from "./day";

interface Props {
  shifts: any;
  employees: any;
}

const ExpandedWeek = ({ shifts, employees }: Props) => {
  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-0 sm:gap-y-6 text-center text-neutral-300">
      <Day day="Monday" shifts={shifts} employees={employees} />
      <Day day="Tuesday" shifts={shifts} employees={employees} />
      <Day day="Wednesday" shifts={shifts} employees={employees} />
      <Day day="Thursday" shifts={shifts} employees={employees} />
      <Day day="Friday" shifts={shifts} employees={employees} />
      <Day day="Saturday" shifts={shifts} employees={employees} />
      <Day day="Sunday" shifts={shifts} employees={employees} />
    </div>
  );
};
export default ExpandedWeek;
