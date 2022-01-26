import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";
import { IMessage } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<IMessage>) => {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const collection = client.db("db_one").collection("project");

      const { title, link, imageURL } = req.body;

      if (!title) {
        return res.status(400).json({ msg: "title is required" });
      }
      if (!link) {
        return res.status(400).json({ msg: "link is required" });
      }
      if (!imageURL) {
        return res.status(400).json({ msg: "imageURL is required" });
      }

      let { date } = req.body;
      if (!date) {
        return res.status(400).json({ msg: "date is required" });
      }
      date = new Date(date);

      const duplicate = await collection.findOne({ title });
      if (duplicate) {
        return res.status(400).json({ msg: "project already exists" });
      }

      await collection.insertOne({ title, date, link, imageURL });
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
