import { getEmployees, createEmployee } from "../../../lib/prisma/employees";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { employees, error } = await getEmployees();
    if (error) throw new Error(error);
    return res.status(200).json({ employees });
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { employee, error } = await createEmployee(data);
      if (error) throw new Error(error);
      return res.status(200).json({ employee });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
