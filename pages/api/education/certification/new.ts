import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import auth from "../../../../middleware/auth";
import { IMessage } from "../../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<IMessage>) => {
  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const collection = client.db("db_one").collection("certification");

      const { name, organization, credential } = req.body;

      if (!organization) {
        return res.status(400).json({ msg: "organization is required" });
      }
      if (!name) {
        return res.status(400).json({ msg: "name is required" });
      }
      if (!credential) {
        return res.status(400).json({ msg: "credential is required" });
      }

      let { issueDate } = req.body;
      if (!issueDate) {
        return res.status(400).json({ msg: "issueDate is required" });
      }
      issueDate = new Date(issueDate);

      let duplicate = await collection.findOne({
        credential,
      });
      if (duplicate) {
        return res.status(400).json({ msg: "certification already exists" });
      }

      await collection.insertOne({
        name,
        organization,
        issueDate,
        credential,
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
