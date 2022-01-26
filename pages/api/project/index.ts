import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";

export const getProjectData = async () => {
  const client = await clientPromise;
  const projects = await client
    .db("db_one")
    .collection("project")
    .find({})
    .project({
      _id: 0,
    })
    .sort({ date: -1 })
    .toArray();

  return projects;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const projects = await getProjectData();
      return res.json(projects);
    } catch (err) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
