import Shift from "./shift";

interface Props {
  day: string;
  shifts: any;
  employees: any;
}
const getWeek = (date: any) => {
  const startDate: any = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
};

const Day = ({ day, shifts, employees }: Props) => {
  //Calculating the current weeknumber
  const currentDate: any = new Date();

  let shiftsByday;
  if (shifts.length > 0) {
    shiftsByday = shifts.filter((shift: any) => {
      return (
        new Date(shift.timeStart).toDateString().slice(0, 3) ===
          day.slice(0, 3) &&
        new Date(shift.timeStart) &&
        getWeek(currentDate) === getWeek(new Date(shift.timeStart))
      );
    });
  }

  return (
    <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
      <h2 className="border-b text-2xl py-3">{day}</h2>
      <div className="scrollbar-day h-[30vh] max-h-96 overflow-y-auto">
        {shiftsByday &&
          shiftsByday.length > 0 &&
          shiftsByday.map((shift: any) => (
            <Shift
              key={shift.id}
              shiftId={shift.id}
              employeeName={shift.employeeName}
              timeStart={new Date(shift.timeStart).toLocaleTimeString("it-IT", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              timeEnd={new Date(shift.timeEnd).toLocaleTimeString("it-IT", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              color={shift.employee.color}
            />
          ))}
      </div>
    </div>
  );
};

export default Day;
