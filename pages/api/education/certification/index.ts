import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import auth from "../../../../middleware/auth";

export const getCertificationData = async () => {
  const client = await clientPromise;
  const certifications = await client
    .db("db_one")
    .collection("certification")
    .find({})
    .project({
      _id: 0,
    })
    .sort({ issueDate: -1 })
    .toArray();

  return certifications;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const certifications = await getCertificationData();
      return res.json(certifications);
    } catch (err) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
