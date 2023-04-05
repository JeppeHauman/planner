import Shift from "./shift";

interface Props {
  day: string;
  shifts: any;
}

const Day = ({ day, shifts }: Props) => {
  const shiftsByday = shifts.filter(
    (shift: any) =>
      shift.timeStart.toDateString().slice(0, 3) === day.slice(0, 3)
  );

  return (
    <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
      <h2 className="border-b text-2xl py-3">{day}</h2>
      <div className="scrollbar-day max-h-96 overflow-y-auto">
        {shiftsByday.map((shift: any) => (
          <Shift
            key={shift.id}
            shiftId={shift.id}
            employeeName={shift.employeeName}
            timeStart={shift.timeStart.toLocaleTimeString("it-IT", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            timeEnd={shift.timeEnd.toLocaleTimeString("it-IT", {
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
