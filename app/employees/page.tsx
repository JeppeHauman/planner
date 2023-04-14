import { useRouter } from "next/navigation";
import CreateEmployee from "./createEmployee";
import Employee from "./employee";
import { deleteEmployee, getEmployees } from "@/lib/prisma/employees";

const getData = async () => {
  const employees = await fetch("http://localhost:3000/api/employees/", {
    cache: "no-store",
  });
  return employees.json();
};

const getShiftsData = async () => {
  const shifts = await fetch("http://localhost:3000/api/shifts");
  return shifts.json();
};

async function Employees() {
  const { employees } = await getData();
  const { shifts } = await getShiftsData();
  return (
    <div className="flex justify-center text-white">
      <div>
        <h1 className="text-center text-[10vw] sm:text-5xl mb-8 font-bold">
          Employees
        </h1>

        {employees !== undefined && employees.length > 0 ? (
          <div className="flex flex-col gap-6 justify-center ">
            {employees.map((employee: any) => (
              <Employee
                shifts={shifts}
                key={employee.id}
                id={employee.id}
                color={employee.color!}
                name={employee.name}
                email={employee.email}
              />
            ))}
          </div>
        ) : (
          <h2 className="center text-4xl mb-16">No employees added yet.</h2>
        )}

        <div>
          <CreateEmployee />
        </div>
      </div>
    </div>
  );
}

export default Employees;
