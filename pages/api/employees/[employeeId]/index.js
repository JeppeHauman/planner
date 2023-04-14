import {
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
} from "../../../../lib/prisma/employees";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { employeeId } = req.query;
      const { employee, error } = await getEmployeeById(employeeId);
      if (error) throw new Error(error);
      return res.status(200).json({ employee });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "PUT") {
    try {
      const { employeeId } = req.query;

      const { inputName, inputEmail, editColor } = req.body;

      const { updatedEmployee, error } = await updateEmployee(
        employeeId,
        inputName,
        inputEmail,
        editColor
      );
      if (error) throw new Error(error);
      return res.status(200).json({ updatedEmployee });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { employeeId } = req.query;
      const { deletedEmployee, error } = await deleteEmployee(employeeId);
      return res.status(200).json({ deletedEmployee });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
