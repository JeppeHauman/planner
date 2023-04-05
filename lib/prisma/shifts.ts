import prisma from ".";

export async function getShifts() {
  try {
    const shifts = await prisma.shift.findMany({
      include: {
        employee: {
          select: {
            color: true
          }
        }
      }
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
