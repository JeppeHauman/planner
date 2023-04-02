import CreateEmployee from "./createEmployee";
import Employee from "./employee";
import { deleteEmployee, getEmployees } from "@/lib/prisma/employees";

async function Employees() {
  const { employees, error } = await getEmployees();
  const onClick = async (id: string) => {
    await deleteEmployee(id);
  };

  return (
    <div className="flex justify-center text-white">
      <div>
        <h1 className="text-center text-6xl mb-8 font-bold">Employees</h1>
        <table className="p-6">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>

            {employees?.map((employee) => (
              <Employee
                key={employee.id}
                id={employee.id}
                name={employee.name}
                email={employee.email}
              />
            ))}
          </tbody>
        </table>
        <div>
          <CreateEmployee />
        </div>
      </div>
    </div>
  );
}

export default Employees;
