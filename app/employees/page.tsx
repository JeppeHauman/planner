import { useRouter } from "next/navigation";
import CreateEmployee from "./createEmployee";
import Employee from "./employee";
import { deleteEmployee, getEmployees } from "@/lib/prisma/employees";

const getData = async () => {
  const data = await fetch("http://localhost:3000/api/employees/", {
    cache: "no-store",
  });
  return data.json();
};

async function Employees() {
  const { employees } = await getData();
  return (
    <div className="flex justify-center text-white">
      <div>
        <h1 className="text-center text-6xl mb-8 font-bold">Employees</h1>

        {employees !== undefined && employees.length > 0 ? (
          <table className="p-6">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>

              {employees.map((employee: any) => (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  color={employee.color!}
                  name={employee.name}
                  email={employee.email}
                />
              ))}
            </tbody>
          </table>
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
