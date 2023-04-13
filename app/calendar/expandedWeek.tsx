import Day from "./day";

interface Props {
  shifts: any;
  employees: any;
}

const ExpandedWeek = ({ shifts, employees }: Props) => {
  //Calculate the week#
  const getWeek = (date: any) => {
    const startDate: any = new Date(date.getFullYear(), 0, 1);
    let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
  };
  const weekNumber = getWeek(new Date());

  return (
    <div>
      <h3 className="text-center text-4xl mb-4 mx-8">Week# {weekNumber}</h3>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-y-6 sm:gap-0 text-center text-neutral-300">
        <Day dayOfWeekProp={1} day="Monday" shifts={shifts} />
        <Day dayOfWeekProp={2} day="Tuesday" shifts={shifts} />
        <Day dayOfWeekProp={3} day="Wednesday" shifts={shifts} />
        <Day dayOfWeekProp={4} day="Thursday" shifts={shifts} />
        <Day dayOfWeekProp={5} day="Friday" shifts={shifts} />
        <Day dayOfWeekProp={6} day="Saturday" shifts={shifts} />
        <Day dayOfWeekProp={7} day="Sunday" shifts={shifts} />
      </div>
    </div>
  );
};
export default ExpandedWeek;
