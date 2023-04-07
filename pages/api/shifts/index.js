import prisma from "../../../lib/prisma";
import { createShift, getShifts } from "../../../lib/prisma/shifts";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { shifts, error } = await getShifts();
      return res.status(200).json({ shifts });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;

      const { shift, error } = await createShift(data);
      if (error) console.log(error);
      return res.status(200).json({ shift });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};

export default handler;
