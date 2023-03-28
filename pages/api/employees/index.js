import { getEmployees, createEmployee } from "@";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { employees, error } = await getEmployees();
      if (error) throw new Error(error);
      return res.status(200).json({ employees });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
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
