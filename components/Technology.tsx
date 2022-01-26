import Image from "next/image";
import { FunctionComponent } from "react";
import { ITechnology } from "../utils/types";

export const Technology: FunctionComponent<{ data: ITechnology[] }> = ({
  data,
}) => {
  if (!process.env.S3_BUCKET_NAME) {
    throw Error("S3_BUCKET_NAME is not in enviroment variables");
  }
  if (!process.env.S3_BUCKET_REGION) {
    throw Error("S3_BUCKET_REGION is not in enviroment variables");
  }

  const baseURL = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com`;

  const languages = data.filter((item) => item._id === "language")[0]
    .technologies;
  const frameworks = data.filter((item) => item._id === "framework")[0]
    .technologies;
  const others = data.filter((item) => item._id === "others")[0].technologies;

  return (
    <div>
      <div>
        <h3>Languages</h3>
        {languages.map((item) => (
          <div key={item}>
            <p>{item}</p>
            <Image
              src={`${baseURL}/${item}.svg`}
              alt={item}
              width="75px"
              height="75px"
            />
          </div>
        ))}
      </div>

      <div>
        <h3>Frameworks</h3>
        {frameworks.map((item) => (
          <div key={item}>
            <p>{item}</p>
            <Image
              src={`${baseURL}/${item}.svg`}
              alt={item}
              width="75px"
              height="75px"
            />
          </div>
        ))}
      </div>

      <div>
        <h3>Others</h3>
        {others.map((item) => (
          <div key={item}>
            <p>{item}</p>
            <Image
              src={`${baseURL}/${item}.svg`}
              alt={item}
              width="75px"
              height="75px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
