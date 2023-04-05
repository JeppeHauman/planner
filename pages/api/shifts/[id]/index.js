import prisma from "../../../../lib/prisma";
import { deleteShift } from "../../../../lib/prisma/shifts";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const { deletedShift, error } = await deleteShift(id);
      return res.status(200).json({ deletedShift });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
};

export default handler;
