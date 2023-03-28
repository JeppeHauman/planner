import prisma from ".";

export async function getEmployees() {
  try {
    const employees = await prisma.employee.findMany();
    return { employees };
  } catch (error: any) {
    return { error };
  }
}

export async function createEmployee(employee: any) {
  try {
    const newEmployee = await prisma.employee.create({ data: employee });
    return { employee: newEmployee };
  } catch (error) {
    return { error };
  }
}

export async function getEmployeeById(id: string) {
  try {
    const employee = await prisma.employee.findUnique({ where: { id } });
    return { employee };
  } catch (error) {
    return { error };
  }
}
