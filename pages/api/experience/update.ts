import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";
import { IMessage } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<IMessage>) => {
  if (req.method === "PATCH") {
    try {
      const client = await clientPromise;
      const collection = client.db("db_one").collection("experience");

      const { company, position } = req.body;

      if (!company) {
        return res.status(400).json({ msg: "company is required" });
      }
      if (!position) {
        return res.status(400).json({ msg: "position is required" });
      }

      let { endDate } = req.body;
      if (!endDate) {
        return res.status(400).json({ msg: "endDate is required" });
      }
      endDate = new Date(endDate);

      let prevExperience = await collection.findOne({
        company,
        position,
        endDate: null,
        onGoing: true,
      });
      if (!prevExperience) {
        return res.status(400).json({ msg: "experience does not exist" });
      }

      await collection.updateOne(
        { company, position, onGoing: true },
        { $set: { endDate: new Date(endDate), onGoing: false } }
      );
      return res.status(200).json({ msg: "success" });
    } catch (err: unknown) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
