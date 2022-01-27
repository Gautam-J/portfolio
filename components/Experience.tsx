import { FunctionComponent } from "react";
import { IExperience } from "../utils/types";
import { GoPrimitiveDot } from "react-icons/go";
import { BsArrowUp } from "react-icons/bs";
import { useTheme } from "next-themes";
import Image from "next/image";
import experienceLight from "../public/assets/experienceLight.svg";
import experienceDark from "../public/assets/experienceDark.svg";

const Experience: FunctionComponent<{
  data: IExperience[];
}> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div
      id="Experience"
      className="relative grid items-center justify-center min-h-screen grid-cols-12 h-max bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01"
    >
      <div className="absolute hidden col-span-4 col-start-1 lg:block top-10">
        <Image
          src={theme === "light" ? experienceLight : experienceDark}
          alt="Experience Graphic"
          width="400px"
          height="400px"
        />
      </div>
      <h1 className="col-start-2 mt-5 col-span-full linux">$ history</h1>
      <div className="flex justify-center col-start-1 col-span-full lg:flex-none lg:col-start-7 lg:col-span-full">
        <h1 className="mt-10 mb-4 mainHeading md:mt-0 md:mb-0">Experience</h1>
      </div>

      <div className="z-10 col-start-1 lg:col-start-2 lg:col-end-12 col-span-full">
        <div className="grid items-start justify-start grid-cols-12 lg:justify-evenly lg:flex lg:flex-wrap">
          {data.map((exp) => (
            <div
              key={exp._id}
              className="my-4 lg:my-8 lg:mx-16 odd:col-start-2 odd:col-span-full even:col-end-12 even:col-start-4"
            >
              <h3 className="text-xl font-bold lg:text-2xl text-light-base0D dark:text-dark-base0D">
                {exp._id}
              </h3>
              <p className="text-light-base09 dark:text-dark-base09">
                {new Date(exp.minStartDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}{" "}
                -{" "}
                {exp.onGoing
                  ? "Present"
                  : new Date(exp.maxEndDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
              </p>
              <div className="mt-2 lg:mt-4">
                {exp.positions.map((pos, index) => (
                  <div key={pos}>
                    <div className="flex items-center justify-start lg:mt-1">
                      <GoPrimitiveDot className="mr-2 lg:mr-4 text-light-base05 dark:text-dark-base05" />
                      <p className="text-lg lg:text-xl">{pos}</p>
                    </div>
                    {index !== exp.positions.length - 1 && (
                      <div className="">
                        <BsArrowUp className="my-1 mr-4 scale-150 text-light-base05 dark:text-dark-base05" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Image
            src={theme === "light" ? experienceLight : experienceDark}
            alt="Experience Graphic"
            width="200px"
            height="200px"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
