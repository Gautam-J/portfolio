import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";

export const getAboutData = async () => {
  const client = await clientPromise;
  const descriptions = await client
    .db("db_one")
    .collection("about")
    .find({})
    .project({
      _id: 0,
      description: 1,
    })
    .sort({ createdAt: -1 })
    .limit(1)
    .toArray();

  return descriptions[0];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const description = await getAboutData();
      return res.json(description);
    } catch (err) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
