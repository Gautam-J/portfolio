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
    <div className="relative grid items-center justify-center h-screen grid-cols-12 bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01">
      <div className="absolute col-span-4 col-start-1 top-1/4">
        <Image
          src={theme === "light" ? experienceLight : experienceDark}
          alt="Experience Graphic"
        />
      </div>
      <h1 className="col-start-2 mt-5 col-span-full linux">$ history</h1>
      <h1 className="col-start-7 col-span-full mainHeading">Experience</h1>

      <div className="z-10 col-start-2 col-end-12">
        <div className="flex flex-wrap items-start justify-center">
          {data.map((exp) => (
            <div key={exp._id} className="mx-16 my-8">
              <h3 className="text-2xl font-bold text-light-base0D dark:text-dark-base0D">
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
              <div className="mt-4">
                {exp.positions.map((pos) => (
                  <>
                    <div
                      key={pos}
                      className="flex items-center justify-start mt-1"
                    >
                      <GoPrimitiveDot className="mr-4 text-light-base05 dark:text-dark-base05" />
                      <p className="text-xl">{pos}</p>
                    </div>
                    <div className="last:hidden">
                      <BsArrowUp className="my-1 mr-4 scale-150 text-light-base05 dark:text-dark-base05" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
