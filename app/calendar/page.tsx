import View from "./view";
import { currentUser } from "@clerk/nextjs/app-beta";
import type { User } from "@clerk/nextjs/api";
import { auth } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";
import Link from "next/link";

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

  // const user: User | null = await currentUser();
  const { userId } = auth();
  console.log(userId);

  if (!userId) {
    redirect("/sign-in?redirectUrl=/calendar");
    // return (
    //   <div className="flex flex-col items-center">
    //     <h2>You need to sign in</h2>
    //     <Link href={"/sign-in?redirectUrl=/calendar"}>sign in</Link>
    //   </div>
    // );
  }

  return (
    <div>
      <View shifts={shifts} employees={employees} />
    </div>
  );
}
