import { FunctionComponent } from "react";
import { BsArrowDown, BsFillArrowUpCircleFill } from "react-icons/bs";
import { IRole } from "../utils/types";
import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";
import homeLight from "../public/assets/homeLight.svg";
import homeDark from "../public/assets/homeDark.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  graphic,
  linux,
  leftToRight,
  bottomToTop,
  upDownInfinite,
  onTapScale,
} from "../animations/intro";

const Intro: FunctionComponent<{
  data: IRole[];
}> = ({ data }) => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="Home"
      className="relative grid items-center grid-cols-12 introContainerMobile lg:introContainer bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01"
    >
      <motion.h1
        variants={linux}
        initial="initial"
        whileInView="animate"
        className="col-start-5 mt-12 col-span-full lg:col-span-8 lg:col-start-2 linux"
      >
        $ home
      </motion.h1>

      <div className="col-start-2 lg:mb-24 col-span-full lg:col-span-7 lg:col-start-3">
        <motion.h1
          className="hidden lg:block mainHeading"
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Hi, I&apos;m Gautam!
        </motion.h1>

        <div className="mainHeading lg:hidden">
          <motion.h1 variants={leftToRight} initial="initial" animate="animate">
            Hi,
          </motion.h1>
          <motion.h1 variants={leftToRight} initial="initial" animate="animate">
            I&apos;m Gautam!
          </motion.h1>
        </div>

        <motion.p
          className="text-md lg:pt-8 lg:text-4xl text-light-base0D dark:text-dark-base0D"
          variants={bottomToTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Typewriter
            options={{
              strings: data.map((item) => item.role),
              autoStart: true,
              loop: true,
            }}
          />
        </motion.p>
      </div>

      <motion.div
        variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="justify-center col-start-1 col-span-full lg:absolute lg:col-start-9 lg:col-span-full"
      >
        <Image
          src={theme === "light" ? homeLight : homeDark}
          alt="Home Graphic"
          className="scale-75"
        />
      </motion.div>

      <motion.div
        variants={upDownInfinite}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center justify-center col-start-1 col-span-full"
      >
        <BsArrowDown className="text-5xl lg:text-7xl text-light-base05 dark:text-dark-base05" />
      </motion.div>

      <motion.button
        aria-label="Scroll to top"
        className="fixed z-40 text-5xl border-none outline-none cursor-pointer lg:bottom-14 lg:right-14 bottom-8 right-8"
        onClick={scrollToTop}
        whileTap="tap"
        whileHover="hover"
        variants={onTapScale}
        initial="initial"
        animate="animate"
      >
        <BsFillArrowUpCircleFill className="text-light-base05 dark:text-dark-base05" />
      </motion.button>
    </div>
  );
};

export default Intro;
