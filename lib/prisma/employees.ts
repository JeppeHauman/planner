import prisma from ".";

export async function getEmployees() {
  try {
    const employees = await prisma.employee.findMany();
    if (employees !== undefined && employees.length > 0) return { employees };
    return { lala: "asd" };
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
  email?: string,
  color?: string,
  imgSrc?: string
) {
  try {
    const employeeUpdates = await prisma.employee.update({
      where: { id: id },
      data: {
        name: name,
        email: email,
        color: color,
        imgSrc: imgSrc,
      },
    });
    return employeeUpdates;
  } catch (error) {
    return error;
  }
}

export async function deleteEmployee(id: string) {
  try {
    const employeeDeleted = await prisma.employee.delete({
      where: { id: id },
    });
    return employeeDeleted;
  } catch (error) {
    return error;
  }
}
