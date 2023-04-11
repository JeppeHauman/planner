import Day from "./day";

interface Props {
  shifts: any;
  employees: any;
}

const ExpandedWeek = ({ shifts, employees }: Props) => {
  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-0 sm:gap-y-6 text-center text-neutral-300">
      <Day dayOfWeekProp={1} day="Monday" shifts={shifts} />
      <Day dayOfWeekProp={2} day="Tuesday" shifts={shifts} />
      <Day dayOfWeekProp={3} day="Wednesday" shifts={shifts} />
      <Day dayOfWeekProp={4} day="Thursday" shifts={shifts} />
      <Day dayOfWeekProp={5} day="Friday" shifts={shifts} />
      <Day dayOfWeekProp={6} day="Saturday" shifts={shifts} />
      <Day dayOfWeekProp={7} day="Sunday" shifts={shifts} />
    </div>
  );
};
export default ExpandedWeek;
