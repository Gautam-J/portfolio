import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";
import { IMessage, IRole } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<IMessage>) => {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const collection = client.db("db_one").collection("intro");

      const Role = req.body as IRole;

      if (!Role.role) {
        return res.status(400).json({ msg: "role is required" });
      }

      const duplicate = await collection.findOne({ role: Role.role });
      if (duplicate) {
        return res.status(400).json({ msg: "role already exists" });
      }

      await collection.insertOne(Role);
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
