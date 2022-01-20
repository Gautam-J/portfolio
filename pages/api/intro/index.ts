import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";
import { IRole } from "../../../utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const roles = (await client
        .db("db_one")
        .collection("intro")
        .find({})
        .toArray()) as IRole[];

      return res.json(roles);
    } catch (err) {
      res.status(500).json({ msg: `${err.message}` });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
