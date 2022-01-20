import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";
import { IMessage } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<IMessage>) => {
  if (req.method === "POST") {
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

      let { startDate } = req.body;
      if (!startDate) {
        return res.status(400).json({ msg: "startDate is required" });
      }
      startDate = new Date(startDate);

      let { endDate } = req.body;
      endDate = endDate ? new Date(endDate) : "present";

      let duplicate = await collection.findOne({
        company,
        position,
        startDate,
        endDate,
      });
      if (duplicate) {
        return res.status(400).json({ msg: "experience already exists" });
      }

      await collection.insertOne({
        company,
        position,
        startDate,
        endDate,
      });
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
