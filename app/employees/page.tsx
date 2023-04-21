import { redirect, useRouter } from "next/navigation";
import CreateEmployee from "./createEmployee";
import Employee from "./employee";
import { deleteEmployee, getEmployees } from "@/lib/prisma/employees";
import { auth } from "@clerk/nextjs/app-beta";
import { getShifts } from "@/lib/prisma/shifts";

export const dynamic = "force-dynamic";

async function Employees() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in?redirectUrl=/employees");
  }
  const { employees } = await getEmployees();
  const { shifts } = await getShifts();
  const shiftsAsString = shifts?.map(({ timeEnd, timeStart, ...rest }) => ({
    timeEnd: String(timeEnd ?? ""),
    timeStart: String(timeStart ?? ""),
    ...rest,
  }));

  return (
    <div className="flex justify-center text-white relative">
      <div>
        <h1 className="text-center text-[10vw] sm:text-5xl mb-8 font-bold">
          Employees
        </h1>

        <div className="h-[60vh] overflow-y-auto scrollbar-day overflow-x-visible">
          {employees !== undefined && employees.length > 0 ? (
            <div className="flex flex-col gap-2 justify-center px-3">
              {employees.map((employee: any) => (
                <Employee
                  shifts={shiftsAsString}
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
        </div>

        <div>
          <CreateEmployee />
        </div>
      </div>
    </div>
  );
}

export default Employees;
