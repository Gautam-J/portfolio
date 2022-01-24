import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import auth from "../../../../middleware/auth";

export const getDegreeData = async () => {
  const client = await clientPromise;
  const degrees = await client
    .db("db_one")
    .collection("degree")
    .find({})
    .project({
      _id: 0,
    })
    .sort({ endDate: -1 })
    .toArray();

  return degrees;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const degrees = await getDegreeData();
      return res.json(degrees);
    } catch (err) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
