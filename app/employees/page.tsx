import CreateEmployee from "./createEmployee";
import Employee from "./employee";
import { getEmployees } from "@/lib/prisma/employees";

async function Employees() {
  const { employees, error } = await getEmployees();

  return (
    <div>
      <h1>Employees</h1>
      <div>
        <ul className="p-6">
          {employees?.map((employee) => (
            <Employee
              id={employee.id}
              name={employee.name}
              email={employee.email}
            />
          ))}
        </ul>
      </div>
      <div>
        <CreateEmployee />
      </div>
    </div>
  );
}

export default Employees;
