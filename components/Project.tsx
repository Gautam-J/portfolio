import { FunctionComponent } from "react";
import { IProject } from "../utils/types";
import Image from "next/image";

export const Project: FunctionComponent<{ data: IProject[] }> = ({ data }) => {
  if (!process.env.S3_BUCKET_NAME) {
    throw Error("S3_BUCKET_NAME is not in enviroment variables");
  }
  if (!process.env.S3_BUCKET_REGION) {
    throw Error("S3_BUCKET_REGION is not in enviroment variables");
  }

  const baseURL = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com`;
  return (
    <div>
      <h1>Project</h1>
      <div>
        {data.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{new Date(project.date).toDateString()}</p>
            <p>{project.link}</p>
            <Image
              src={`${baseURL}/${project.imageURL}`}
              alt={project.title}
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
