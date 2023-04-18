import { getEmployeeById, getEmployees } from "@/lib/prisma/employees";
import Employee from "../employee";
import { getShifts, getShiftsByEmployee } from "@/lib/prisma/shifts";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../../public/profile-picture-placeholder.png";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/app-beta";

interface PageProps {
  params: {
    employeeId: string;
  };
}

// export async function generateStaticParams() {
//   const { employees } = await getEmployees();
//   return employees!.map((employee) => ({
//     employeeId: employee.id,
//   }));
// }

//Calculate week#
const getWeek = (date: any) => {
  const startDate: any = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
};

const EmployeePage = async ({ params }: PageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect(`/sign-in?redirectUrl=/employees/${params.employeeId}`);
  }
  const { employee } = await getEmployeeById(params.employeeId);
  const { shifts } = await getShiftsByEmployee(params.employeeId);

  const futureShifts = shifts?.filter((shift) => {
    return new Date(shift.timeEnd) >= new Date(new Date());
  });

  const currentWeek = getWeek(new Date());
  const shiftsInCurrentWeek = shifts?.filter(
    (shift) => getWeek(shift.timeStart) == currentWeek
  );

  const hoursInCurrentWeek = shiftsInCurrentWeek?.reduce(
    (a, b) => a + (b.timeEnd.getHours() - b.timeStart.getHours()),
    0
  );

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-20">
        <div className="card-employee flex flex-col items-center md:flex-row max-w-lg w-11/12 border mb-10 p-6 rounded-md bg-black bg-opacity-40 shadow-2xl shadow-black drop-shadow-xl">
          <Image
            src={PlaceholderImage}
            priority
            width={200}
            alt="profile picture placeholder"
          ></Image>
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-4xl text-center mb-10">{employee?.name}</h1>
            <Link href={`mailto:${employee?.email}`}>{employee?.email}</Link>
            <p>Hours this week: {hoursInCurrentWeek}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-4xl mb-10">Future shifts</h3>
          <ul className="grid grid-cols-3 gap-4">
            {futureShifts?.map((shift) => (
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
      </div>
    </div>
  );
};
export default EmployeePage;
