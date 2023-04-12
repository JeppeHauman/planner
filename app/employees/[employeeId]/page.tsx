import { getEmployeeById, getEmployees } from "@/lib/prisma/employees";
import Employee from "../employee";
import { getShifts, getShiftsByEmployee } from "@/lib/prisma/shifts";
import Link from "next/link";

interface PageProps {
  params: {
    employeeId: string;
  };
}

export async function generateStaticParams() {
  const { employees } = await getEmployees();
  return employees!.map((employee) => ({
    employeeId: employee.id,
  }));
}

const EmployeePage = async ({ params }: PageProps) => {
  const { employee } = await getEmployeeById(params.employeeId);
  const { shifts } = await getShiftsByEmployee(params.employeeId);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-center mb-10">{employee?.name}</h1>
      <div className="max-w-sm w-11/12 border mb-10">
        <Link href={`mailto:${employee?.email}`}>{employee?.email}</Link>
        <p>Hours this week: {}</p>
      </div>

      <h3 className="text-4xl mb-10">Future shifts</h3>
      <ul className="grid grid-cols-3 gap-4">
        {shifts?.map((shift) => (
          <li key={shift.id} className="mb-4">
            <h3 className="text-xl">{shift.timeStart.toDateString()}</h3>
            {shift.employeeName}:{" "}
            {shift.timeStart.toLocaleTimeString("it-IT", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {shift.timeEnd.toLocaleTimeString("it-IT", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EmployeePage;
