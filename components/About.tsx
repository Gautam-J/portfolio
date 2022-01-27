import { FunctionComponent } from "react";
import { IAbout } from "../utils/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import developerLight from "../public/assets/developerLight.svg";
import developerDark from "../public/assets/developerDark.svg";
import guitarLight from "../public/assets/guitarLight.svg";
import guitarDark from "../public/assets/guitarDark.svg";
import basketballLight from "../public/assets/basketballLight.svg";
import basketballDark from "../public/assets/basketballDark.svg";
import { motion } from "framer-motion";
import { linux, leftToRight, graphic } from "../animations/intro";

const About: FunctionComponent<{
  data: IAbout;
}> = ({ data }) => {
  const { theme } = useTheme();

  return (
    <div
      id="About"
      className="grid items-center min-h-screen grid-cols-12 h-max bg-gradient-to-b from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base00"
    >
      <motion.h1
        variants={linux}
        initial="initial"
        whileInView="animate"
        className="col-start-4 lg:mt-10 col-span-full lg:col-start-7 linux lg:col-span-full"
      >
        $ whoami
      </motion.h1>
      <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
        <motion.h1
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mainHeading"
        >
          About Me
        </motion.h1>
        <p className="mt-2 lg:mt-4 lg:text-lg">{data.description}</p>
      </div>

      <div className="justify-center col-start-2 col-end-12">
        <motion.div
          variants={graphic}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="items-center justify-center hidden lg:flex gap-x-20"
        >
          <Image
            src={theme === "light" ? developerLight : developerDark}
            alt="Developer Graphic"
            className="scale-75"
            height="300px"
            width="300px"
          />
          <Image
            src={theme === "light" ? guitarLight : guitarDark}
            alt="Guitar Graphic"
            className="scale-75"
            height="300px"
            width="300px"
          />
          <Image
            src={theme === "light" ? basketballLight : basketballDark}
            alt="Basketball Graphic"
            className="scale-75"
            height="300px"
            width="300px"
          />
        </motion.div>

        <div className="flex items-center justify-center lg:hidden">
          <Image
            src={theme === "light" ? developerLight : developerDark}
            alt="Developer Graphic"
            className="scale-75"
            height="300px"
            width="300px"
          />
          <Image
            src={theme === "light" ? basketballLight : basketballDark}
            alt="Basketball Graphic"
            className="scale-75"
            height="300px"
            width="300px"
          />
        </div>

        <motion.div
          variants={graphic}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-center lg:hidden"
        >
          <Image
            src={theme === "light" ? guitarLight : guitarDark}
            alt="Guitar Graphic"
            className="scale-75"
            height="150px"
            width="150px"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
