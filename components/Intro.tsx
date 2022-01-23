import { FunctionComponent } from "react";
import { IRole } from "../utils/types";

const Intro: FunctionComponent<{
  data: IRole[];
}> = ({ data }) => {
  return (
    // h-screen can be used
    <div className="grid introContainer grid-cols12">
      <div className="grid items-center grid-cols-6">
        <div className="col-span-6 col-start-2">
          {/* Shown on medium screens and larger */}
          <h1 className="hidden font-extrabold md:block text-light-base0C dark:text-dark-base0C text-7xl">
            Hi, I&apos;m Gautam!
          </h1>

          {/* TODO: add typing carousel animation */}
          <div className="col-start-2 col-span-full">
            {data.map((item) => (
              <p
                key={item._id}
                className="hidden pt-8 text-2xl font-semibold underline first:block md:text-4xl text-light-base0D"
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
