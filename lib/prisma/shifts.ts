import Shift from "@/app/calendar/shift";
import prisma from ".";

export async function getShifts() {
  try {
    const shifts = await prisma.shift.findMany({
      orderBy: {
        timeStart: "asc",
      },
      include: {
        employee: {
          select: {
            color: true,
          },
        },
      },
    });

    return { shifts };
  } catch (error) {
    return { error };
  }
}

export async function getShiftsByEmployee(employeeId: string) {
  try {
    const shifts = await prisma.shift.findMany({
      where: { employeeId: employeeId },
    });
    return { shifts };
  } catch (error) {
    return { error };
  }
}

export async function createShift(data: any) {
  try {
    const newShift = await prisma.shift.create({ data: data });
    return { newShift };
  } catch (error) {
    return { error };
  }
}

export async function deleteShift(id: string) {
  try {
    const shiftDeleted = await prisma.shift.delete({
      where: { id: id },
    });
    return shiftDeleted;
  } catch (error) {
    return error;
  }
}
