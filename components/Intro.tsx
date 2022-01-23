import { FunctionComponent } from "react";
import { BsArrowDown, BsFillArrowUpCircleFill } from "react-icons/bs";
import { IRole } from "../utils/types";
import homeLight from "../public/assets/homeLight.svg";
import Image from "next/image";

const Intro: FunctionComponent<{
  data: IRole[];
}> = ({ data }) => {
  return (
    // h-screen can be used
    <div className="relative grid items-center grid-cols-12 introContainer">
      <h1 className="col-span-8 col-start-2 mt-12 linux">$ home</h1>

      <div className="col-span-6 col-start-3 mb-24">
        <h1 className="mainHeading">Hi, I&apos;m Gautam!</h1>

        {/* TODO: add typing carousel animation */}
        <div>
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

      <div className="absolute justify-center col-start-9 col-span-full">
        <Image src={homeLight} alt="Home Graphic" className="scale-75" />
      </div>

      <div className="flex items-center justify-center col-start-1 col-span-full">
        <BsArrowDown className="text-7xl" />
      </div>

      <a href="">
        <BsFillArrowUpCircleFill className="fixed text-5xl bottom-14 right-14" />
      </a>
    </div>
  );
};

export default Intro;
