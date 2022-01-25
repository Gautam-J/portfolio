import { config, S3 } from "aws-sdk";

config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_MYAPP
      ? process.env.AWS_ACCESS_KEY_ID_MYAPP
      : "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_MYAPP
      ? process.env.AWS_SECRET_ACCESS_KEY_MYAPP
      : "",
  },
  region: process.env.S3_BUCKET_REGION,
});

const s3 = new S3({ apiVersion: "2006-03-01" });

const uploadS3 = async (bucket: string, fileName: string, body: Buffer) => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: bucket,
        Key: fileName,
        Body: body,
        ACL: "public-read",
      },
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      }
    );
  });
};

export default uploadS3;
