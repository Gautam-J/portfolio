import { FunctionComponent } from "react";
import { BsArrowDown, BsFillArrowUpCircleFill } from "react-icons/bs";
import { IRole } from "../utils/types";
import { useTheme } from "next-themes";
import homeLight from "../public/assets/homeLight.svg";
import homeDark from "../public/assets/homeDark.svg";
import Image from "next/image";

const Intro: FunctionComponent<{
  data: IRole[];
}> = ({ data }) => {
  const { theme } = useTheme();

  return (
    // h-screen can be used
    <div className="relative grid items-center grid-cols-12 introContainer">
      <h1 className="col-start-5 mt-12 col-span-full lg:col-span-8 lg:col-start-2 linux">
        $ home
      </h1>

      <div className="col-start-2 lg:mb-24 col-span-full lg:col-span-6 lg:col-start-3">
        <h1 className="hidden lg:block mainHeading">Hi, I&apos;m Gautam!</h1>

        <div className="mainHeading lg:hidden">
          <h1 className="">Hi,</h1>
          <h1 className="">I&apos;m Gautam!</h1>
        </div>

        {/* TODO: add typing carousel animation */}
        <div>
          {data.map((item) => (
            <p
              key={item._id}
              className="hidden text-lg font-semibold underline lg:pt-8 lg:text-4xl first:block"
            >
              {item.role}
            </p>
          ))}
        </div>
      </div>

      <div className="justify-center col-start-1 col-span-full lg:absolute lg:col-start-9 lg:col-span-full">
        <Image
          src={theme === "light" ? homeLight : homeDark}
          alt="Home Graphic"
          className="scale-75"
        />
      </div>

      <div className="flex items-center justify-center col-start-1 col-span-full">
        <BsArrowDown className="text-5xl lg:text-7xl" />
      </div>

      <a href="">
        <BsFillArrowUpCircleFill className="fixed text-5xl lg:bottom-14 lg:right-14 bottom-8 right-8" />
      </a>
    </div>
  );
};

export default Intro;
