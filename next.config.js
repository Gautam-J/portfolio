/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      `${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com`,
    ],
  },
  env: {
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_BUCKET_REGION: process.env.S3_BUCKET_REGION,
    GOOGLE_ID: process.env.GOOGLE_ID,
  },
};

module.exports = nextConfig;
