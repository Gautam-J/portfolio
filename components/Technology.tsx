import Image from "next/image";

export const Technology = () => {
  const bucketName = process.env.S3_BUCKET_NAME!;
  const region = process.env.S3_BUCKET_REGION!;
  const baseURL = `https://${bucketName}.s3.${region}.amazonaws.com`;

  return (
    <div>
      <Image
        src={`${baseURL}/python.svg`}
        alt="python"
        width="100px"
        height="100px"
      />
    </div>
  );
};

export default Technology;
