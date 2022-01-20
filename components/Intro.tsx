import { FunctionComponent } from "react";
import { IRole } from "../utils/types";

const Intro: FunctionComponent<{
  data: IRole[];
}> = ({ data }) => {
  return (
    // h-screen can be used
    <div className="introContainer">
      <div className="grid grid-cols-6">
        <div className="col-start-2 pt-40 col-span-full ">
          {/* Shown on medium screens and larger */}
          <h1 className="hidden font-extrabold md:block text-light-base0C dark:text-dark-base0C text-7xl">
            Hi, I&apos;m Gautam!
          </h1>

          {/* Shown on smaller screens */}
          <div className="md:hidden">
            <h1 className="text-4xl font-extrabold text-light-base0C dark:text-dark-base0C">
              Hi,
            </h1>
            <h1 className="text-4xl font-extrabold text-light-base0C dark:text-dark-base0C">
              I&apos;m Gautam!
            </h1>
          </div>

          {/* TODO: add typing carousel animation */}
          <div className="col-start-2 col-span-full">
            {data.map((item) => (
              <p
                key={item._id}
                className="pt-8 text-2xl font-semibold underline md:text-4xl text-light-base0D"
              >
                {item.role}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
