import View from "./view";
import { currentUser } from "@clerk/nextjs/app-beta";
import type { User } from "@clerk/nextjs/api";
import { auth } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getShifts } from "@/lib/prisma/shifts";
import { getEmployees } from "@/lib/prisma/employees";

interface DayProps {
  day: string;
}

export const dynamic = "force-dynamic";

export default async function Calendar() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in?redirectUrl=/calendar");
  }
  const { shifts } = await getShifts();
  const shiftsAsString = shifts?.map(({ timeEnd, timeStart, ...rest }) => ({
    timeEnd: String(timeEnd ?? ""),
    timeStart: String(timeStart ?? ""),
    ...rest,
  }));

  const { employees } = await getEmployees();

  // const user: User | null = await currentUser();

  return (
    <div>
      <View shifts={shiftsAsString} employees={employees} />
    </div>
  );
}
