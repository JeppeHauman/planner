import {
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
      const { name, email } = req.body;
      const { updatedEmployee, error } = await updateEmployee(
        employeeId,
        name,
        email
      );
      if (error) throw new Error(error);
      return res.status(200).json({ updatedEmployee });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "PUT"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
