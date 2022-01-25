import type { NextApiRequest, NextApiResponse } from "next";
import auth from "../../middleware/auth";
import { IMessage } from "../../utils/types";
import uploadS3 from "../../utils/aws/uploadS3";
import multer from "multer";
import runMiddleware from "../../utils/runMiddleware";

interface RequestWithFile extends NextApiRequest {
  file?: any;
}

const upload = multer({
  storage: multer.memoryStorage(),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (
  req: RequestWithFile,
  res: NextApiResponse<IMessage>
) => {
  if (req.method === "POST") {
    try {
      if (!process.env.S3_BUCKET_NAME) {
        throw Error("S3_BUCKET_NAME is not in the environment variables.");
      }

      await runMiddleware(req, res, upload.single("file"));
      if (!req.file) {
        return res.status(400).json({ msg: "file is required" });
      }

      const uploadResult = (await uploadS3(
        process.env.S3_BUCKET_NAME,
        req.file.originalname,
        req.file.buffer
      )) as { Location: string };

      return res.status(200).json({ msg: uploadResult.Location });
    } catch (err: unknown) {
      let message: string = err instanceof Error ? err.message : "Server Error";
      return res.status(500).json({ msg: message });
    }
  } else {
    return res.status(405).json({ msg: "method not allowed" });
  }
};

export default auth(handler);
