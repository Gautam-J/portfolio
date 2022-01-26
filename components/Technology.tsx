import Image from "next/image";
import { FunctionComponent } from "react";
import { ITechnology } from "../utils/types";
import { useTheme } from "next-themes";
import technologyLight from "../public/assets/technologyLight.svg";
import technologyDark from "../public/assets/technologyDark.svg";

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

  const { theme } = useTheme();

  const languages = data.filter((item) => item._id === "language")[0]
    .technologies;
  const frameworks = data.filter((item) => item._id === "framework")[0]
    .technologies;
  const others = data.filter((item) => item._id === "others")[0].technologies;

  return (
    <div className="relative grid items-center justify-center min-h-screen grid-cols-12 h-max bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01">
      <h1 className="col-start-2 mt-10 linux col-span-full">$ groups</h1>
      <div className="flex items-center col-start-7 col-span-full">
        <h1 className="my-12 mainHeading">Technology</h1>
      </div>

      <div className="col-start-2 col-end-10">
        <div className="flex flex-col items-start justify-center mb-8">
          <h3 className="px-6 text-4xl font-bold text-light-base0D dark:text-dark-base0D">
            Languages
          </h3>
          <div className="flex items-center justify-start p-6 my-4 drop-shadow-xl gap-x-4 gap-y-8 rounded-3xl flex-warp bg-gradient-to-r from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base01">
            {languages.map((item) => (
              <div key={item}>
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
      </div>

      <div className="col-start-4 col-end-12">
        <div className="absolute left-8">
          <Image
            src={theme === "light" ? technologyLight : technologyDark}
            alt="Technology graphic"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col items-end justify-center mb-8">
          <h3 className="px-6 text-4xl font-bold text-light-base0D dark:text-dark-base0D">
            Frameworks
          </h3>
          <div className="flex flex-wrap items-center justify-end p-6 my-4 drop-shadow-xl gap-x-4 rounded-3xl gap-y-8 bg-gradient-to-r from-light-base00 to-light-base01 dark:from-dark-base01 dark:to-dark-base01">
            {frameworks.map((item) => (
              <div key={item}>
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
      </div>

      <div className="col-start-2 col-end-10 mb-6">
        <div className="flex flex-col items-start justify-center mb-8">
          <h3 className="px-6 text-4xl font-bold text-light-base0D dark:text-dark-base0D">
            Others
          </h3>
          <div className="flex flex-wrap items-center justify-start p-6 my-4 drop-shadow-xl rounded-3xl gap-x-5 gap-y-8 bg-gradient-to-r from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base01">
            {others.map((item) => (
              <div key={item}>
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
      </div>
    </div>
  );
};

export default Technology;
