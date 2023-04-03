import prisma from ".";

export async function getShiftsByDay(date: string) {
  try {
    const shifts = await prisma.shift.findMany({
      where: {
        date: date,
      },
    });
    return { shifts };
  } catch (error) {
    return { error };
  }
}

export async function getShifts() {
  try {
    const shifts = await prisma.shift.findMany();
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
