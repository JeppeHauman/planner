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
  const { shifts } = await getShifts();

  const { employees } = await getEmployees();

  return (
    <div>
      <View shifts={shifts} employees={employees} />
    </div>
  );
}
