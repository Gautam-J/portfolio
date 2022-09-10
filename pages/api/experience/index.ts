import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import auth from "../../../middleware/auth";

export const getExperienceData = async () => {
  const client = await clientPromise;
  const experience = await client
    .db("db_one")
    .collection("experience")
    .aggregate([
      {
        $group: {
          _id: "$company",
          positions: { $push: "$position" },
          minStartDate: { $min: "$startDate" },
          maxStartDate: { $max: "$startDate" },
          maxEndDate: { $max: "$endDate" },
          onGoing: { $max: "$onGoing" },
        },
      },
      {
        $sort: {
          onGoing: -1,
          minStartDate: -1,
          maxEndDate: -1,
        },
      },
      {
        $project: {
          positions: { $reverseArray: "$positions" },
          minStartDate: 1,
          maxEndDate: 1,
          onGoing: 1,
        },
      },
    ])
    .toArray();

  return experience;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const experience = await getExperienceData();
      return res.json(experience);
    } catch (err) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
