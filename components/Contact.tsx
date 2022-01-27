import { FunctionComponent } from "react";
import Image from "next/image";
import linkedin from "../public/assets/linkedin.svg";
import github from "../public/assets/github.svg";
import instagram from "../public/assets/instagram.svg";
import twitter from "../public/assets/twitter.svg";
import contactLight from "../public/assets/contactLight.svg";
import contactDark from "../public/assets/contactDark.svg";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { linux, leftToRight, graphic } from "../animations/intro";

const Contact: FunctionComponent = () => {
  const { theme } = useTheme();
  return (
    <div
      id="Connect"
      className="relative grid grid-cols-12 contactContainer bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01"
    >
      <motion.h1
        variants={linux}
        initial="initial"
        whileInView="animate"
        className="z-10 col-start-5 lg:col-start-8 mt-14 linux col-span-full lg:col-span-full"
      >
        $ ping
      </motion.h1>
      <motion.div
        variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute right-0 col-start-1 top-24 lg:hidden col-span-full"
      >
        <Image
          src={theme === "light" ? contactLight : contactDark}
          alt="Contact Graphic"
          width={200}
          height={200}
        />
      </motion.div>
      <div className="z-10 flex items-center justify-center col-start-2 col-end-12 lg:justify-start lg:flex-none">
        <motion.h1
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-4 mainHeading"
        >
          Connect
        </motion.h1>
      </div>
      <div className="z-10 col-start-2 lg:col-start-3 col-span-full lg:col-span-full">
        <motion.h2
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold lg:text-4xl text-light-base0D dark:text-dark-base0D"
        >
          Gautam J
        </motion.h2>
        <motion.a
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          href="mailto:gautam.jayapal@gmail.com"
          className="text-lg underline text-light-base0C dark:text-dark-base0C hover:text-light-base0C/75 hover:dark:text-dark-base0C/75"
          rel="noopener noreferrer"
          target="_blank"
        >
          gautam.jayapal@gmail.com
        </motion.a>
      </div>

      <motion.div
        variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="absolute right-0 hidden col-start-1 lg:block col-span-full top-1/4"
      >
        <Image
          src={theme === "light" ? contactLight : contactDark}
          alt="Contact Graphic"
          width={400}
          height={400}
        />
      </motion.div>

      <div className="z-10 col-start-2 col-end-12 lg:col-span-4 lg:col-start-5">
        <div className="flex items-center justify-center gap-4 p-2 bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base01 dark:to-dark-base00 rounded-3xl drop-shadow-2xl">
          <motion.a
            variants={graphic}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/gj-07"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={linkedin}
              alt="LinkedIn"
              className="transition duration-200 scale-75 hover:scale-100"
            />
          </motion.a>
          <motion.a
            variants={graphic}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            href="https://www.github.com/gautam-j"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={github}
              alt="GitHub"
              className="transition duration-200 scale-75 hover:scale-100"
            />
          </motion.a>
          <motion.a
            variants={graphic}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            href="https://www.twitter.com/gautamj02"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={twitter}
              alt="Twitter"
              className="transition duration-200 scale-75 hover:scale-100"
            />
          </motion.a>
          <motion.a
            variants={graphic}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            href="https://www.instagram.com/gautam.j"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={instagram}
              alt="Instagram"
              className="transition duration-200 scale-75 hover:scale-100"
            />
          </motion.a>
        </div>
      </div>

      <div className="flex items-center justify-center col-start-2 col-end-12">
        <span className="text-justify text-light-base09 dark:text-dark-base09">
          Made using Next.js, TypeScript, MongoDB, TailwindCSS, AWS, and Framer
          Motion |{" "}
          <a
            className="underline hover:text-light-base09/75 hover:dark:text-dark-base09/75"
            href="https://www.github.com/gautam-j/portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source Code
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
