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
    if (!employee.name || !employee.email)
      throw new Error("We need some data here my guy");
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

export async function updateEmployee(
  id: string,
  name?: string,
  email?: string
) {
  try {
    const employeeUpdates = await prisma.employee.update({
      where: { id: id },
      data: {
        name: name,
        email: email,
      },
    });
    return employeeUpdates;
  } catch (error) {
    return error;
  }
}

export async function deleteEmployee(id: string) {}
