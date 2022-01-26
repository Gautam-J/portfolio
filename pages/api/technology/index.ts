import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";

export const getTechData = async () => {
  const client = await clientPromise;
  const technologies = await client
    .db("db_one")
    .collection("technology")
    .aggregate([
      {
        $group: {
          _id: "$type",
          technologies: { $addToSet: "$name" },
        },
      },
      {
        $unwind: "$technologies",
      },
      {
        $sort: {
          technologies: 1,
        },
      },
      {
        $group: {
          _id: "$_id",
          technologies: { $push: "$technologies" },
        },
      },
    ])
    .toArray();

  return technologies;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const technologies = await getTechData();
      return res.json(technologies);
    } catch (err) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
