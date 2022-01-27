import { FunctionComponent } from "react";
import { ICertification, IDegree } from "../utils/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import educationLight from "../public/assets/educationLight.svg";
import educationDark from "../public/assets/educationDark.svg";

const Education: FunctionComponent<{
  data: { degrees: IDegree[]; certifications: ICertification[] };
}> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div
      id="Education"
      className="relative grid items-center justify-center min-h-screen grid-cols-12 h-max bg-gradient-to-b from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base00"
    >
      <h1 className="col-start-7 mt-4 col-span-full lg:col-start-9 linux lg:col-span-full">
        $ man
      </h1>
      <div className="flex justify-center col-start-1 col-span-full">
        <h1 className="my-6 lg:my-14 mainHeading">Education</h1>
      </div>

      <div className="z-10 col-start-2 col-end-12 my-2 lg:my-10 lg:col-span-8 lg:col-start-3">
        <h3 className="text-3xl font-bold lg:text-5xl text-light-base0D dark:text-dark-base0D">
          Degrees
        </h3>
        <div className="grid flex-wrap items-start justify-around grid-cols-12 my-2 lg:flex lg:my-4">
          {data.degrees.map((degree) => (
            <div
              key={degree.degree}
              className="flex flex-col items-start justify-center my-4 space-y-1 odd:col-start-1 odd:col-span-full even:col-span-full even:col-start-2"
            >
              <h4 className="text-lg font-bold lg:text-2xl text-light-base0C dark:text-dark-base0C">
                {degree.institution}
              </h4>
              <p className="text-light-base09 dark:text-dark-base09">
                {new Date(degree.startDate).getFullYear()} -{" "}
                {new Date(degree.endDate).getFullYear()}
              </p>
              <h5 className="text-lg lg:text-xl">{degree.degree}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center col-start-1 col-span-full lg:absolute lg:right-0 lg:top-1/4">
        <Image
          src={theme === "light" ? educationLight : educationDark}
          alt="Education graphic"
          width="250px"
          height="250px"
          className="scale-75 lg:scale-100"
        />
      </div>

      <div className="z-10 col-start-2 col-end-12">
        <h3 className="my-4 text-3xl font-bold lg:text-5xl text-light-base0D dark:text-dark-base0D">
          Certifications
        </h3>
        <div className="grid flex-wrap items-start grid-cols-12 mb-10 lg:space-x-4 lg:flex justify-evenly">
          {data.certifications.map((certification) => (
            <div
              key={certification.credential}
              className="px-2 py-2 my-2 border-b-4 lg:px-4 lg:my-4 border-light-base05/50 dark:border-dark-base05/50 odd:col-start-1 odd:col-end-12 even:col-span-full even:col-start-2"
            >
              <h5 className="font-bold lg:text-lg text-light-base0C dark:text-dark-base0C">
                {certification.name}
              </h5>
              <a
                href={certification.credential}
                className="underline cursor-pointer text-light-base09 dark:text-dark-base09"
                rel="noopener noreferrer"
                target="_blank"
              >
                {certification.organization}
              </a>
              <span className="text-light-base09 dark:text-dark-base09">
                {" "}
                -{" "}
                {new Date(certification.issueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
