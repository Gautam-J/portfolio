import { FunctionComponent } from "react";
import { IProject } from "../utils/types";
import Image from "next/image";
import { useTheme } from "next-themes";
import projectLight from "../public/assets/projectLight.svg";
import projectDark from "../public/assets/projectDark.svg";

export const Project: FunctionComponent<{ data: IProject[] }> = ({ data }) => {
  if (!process.env.S3_BUCKET_NAME) {
    throw Error("S3_BUCKET_NAME is not in enviroment variables");
  }
  if (!process.env.S3_BUCKET_REGION) {
    throw Error("S3_BUCKET_REGION is not in enviroment variables");
  }

  const baseURL = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com`;
  const { theme } = useTheme();

  return (
    <div className="relative grid items-center justify-center min-h-screen grid-cols-12 h-max bg-gradient-to-b from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base00">
      <h1 className="z-10 col-start-2 mt-4 lg:mt-10 lg:col-start-8 linux col-span-full">
        $ grep
      </h1>
      <div className="z-10 flex items-center justify-center col-start-1 lg:justify-start col-span-full lg:flex-none lg:col-start-2 lg:col-span-full">
        <h1 className="mt-10 mb-16 lg:mt-10 mainHeading">Projects</h1>
      </div>
      <div className="absolute top-0 right-0 hidden lg:block">
        <Image
          src={theme === "light" ? projectLight : projectDark}
          alt="Projects Graphic"
          width="350px"
          height="350px"
        />
      </div>

      <div className="absolute top-0 right-0 lg:hidden">
        <Image
          src={theme === "light" ? projectLight : projectDark}
          alt="Projects Graphic"
          width="200px"
          height="200px"
        />
      </div>

      <div className="grid items-start grid-cols-1 col-start-2 col-end-12 mb-10 gap-y-10 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-14">
        {data.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-xl drop-shadow-2xl"
          >
            <div className="p-4 lg:p-5 bg-gradient-to-b from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base00">
              <h3 className="text-lg font-bold lg:mb-1 lg:text-2xl text-light-base0D dark:text-dark-base0D">
                {project.title}
              </h3>
              <span className="text-light-base09 dark:text-dark-base09">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
                {"  "}|{" "}
                <a
                  className="underline"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </span>
            </div>
            <div className="w-full h-full">
              <Image
                src={`${baseURL}/${project.imageURL}`}
                alt={project.title}
                width={200}
                height={150}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
