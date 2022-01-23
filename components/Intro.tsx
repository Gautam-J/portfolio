import { FunctionComponent } from "react";
import { BsArrowDown } from "react-icons/bs";
import { IRole } from "../utils/types";

const Intro: FunctionComponent<{
  data: IRole[];
}> = ({ data }) => {
  return (
    // h-screen can be used
    <div className="grid items-center grid-cols-12 introContainer">
      <h1 className="col-span-8 col-start-2 mt-12 font-extrabold text-8xl">
        $ home
      </h1>

      <div className="col-span-6 col-start-3 mb-24">
        <h1 className="font-bold text-7xl">Hi, I&apos;m Gautam!</h1>

        {/* TODO: add typing carousel animation */}
        <div className="col-start-2 col-span-full">
          {data.map((item) => (
            <p
              key={item._id}
              className="hidden pt-8 text-4xl font-semibold underline first:block"
            >
              {item.role}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center col-start-1 col-span-full">
        <BsArrowDown className="text-7xl" />
      </div>
    </div>
  );
};

export default Intro;
