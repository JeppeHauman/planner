import prisma from "../../../lib/prisma";
import { createShift, getShifts } from "../../../lib/prisma/shifts";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { shifts, error } = await getShifts();
      if (error) throw new Error(error);
      return res.status(200).json({ shifts });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  //   if (req.method === "POST") {
  //     const data = req.body;
  //     console.log(data);
  //     const newShift = await prisma.shift.create({
  //       data: {
  //         employee: {
  //           connect: {
  //             id: data.id,
  //           },
  //         },
  //       },
  //     });
  //     console.log(newShift);

  //     return res.status(200).json({ newShift });
  //   }

  if (req.method === "POST") {
    try {
      const { id, date } = req.body;

      const newShift = await prisma.shift.create({
        data: {
          date,
          employeeId: id,
        },
      });
      console.log(newShift);

      return res.status(200).json({ newShift });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};

export default handler;
