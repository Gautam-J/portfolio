import Image from "next/image";
import { FunctionComponent } from "react";
import { ITechnology } from "../utils/types";
import { useTheme } from "next-themes";
import technologyLight from "../public/assets/technologyLight.svg";
import technologyDark from "../public/assets/technologyDark.svg";
import { motion } from "framer-motion";
import { linux, leftToRight, graphic } from "../animations/intro";

const Technology: FunctionComponent<{ data: ITechnology[] }> = ({ data }) => {
  if (!process.env.S3_BUCKET_NAME) {
    throw Error("S3_BUCKET_NAME is not in enviroment variables");
  }
  if (!process.env.S3_BUCKET_REGION) {
    throw Error("S3_BUCKET_REGION is not in enviroment variables");
  }

  const baseURL = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com`;

  const { theme } = useTheme();

  const languages = data.filter((item) => item._id === "language")[0]
    .technologies;
  const frameworks = data.filter((item) => item._id === "framework")[0]
    .technologies;
  const others = data.filter((item) => item._id === "others")[0].technologies;

  return (
    <div
      id="Technology"
      className="relative grid items-center justify-center min-h-screen grid-cols-12 h-max bg-gradient-to-b from-light-base00 to-light-base01 dark:from-dark-base00 dark:to-dark-base01"
    >
      <motion.h1
        variants={linux}
        initial="initial"
        whileInView="animate"
        className="col-start-2 mt-4 lg:mt-14 linux col-span-full"
      >
        $ groups
      </motion.h1>
      <div className="flex justify-center col-start-1 col-span-full lg:col-start-7 lg:col-span-full">
        <motion.h1
          variants={leftToRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="my-10 lg:my-12 mainHeading"
        >
          Technology
        </motion.h1>
      </div>

      <div className="col-start-2 col-end-12 lg:col-start-2 lg:col-end-10">
        <div className="flex flex-col items-start justify-center mb-8">
          <motion.h3
            variants={leftToRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-3 text-3xl font-bold lg:px-6 lg:text-4xl text-light-base0D dark:text-dark-base0D"
          >
            Languages
          </motion.h3>
          <div className="flex flex-wrap items-center p-4 my-4 justify-evenly lg:justify-start lg:p-6 drop-shadow-xl gap-x-4 gap-y-8 rounded-3xl bg-gradient-to-r from-light-base01 to-light-base00 dark:from-dark-base00 dark:to-dark-base01">
            {languages.map((item) => (
              <motion.div
                variants={graphic}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={item}
              >
                <Image
                  src={`${baseURL}/${item}.svg`}
                  alt={item}
                  width="75px"
                  height="75px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-start-2 col-end-12 lg:col-start-4 lg:col-end-12">
        <motion.div
          variants={graphic}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="absolute hidden lg:block left-8"
        >
          <Image
            src={theme === "light" ? technologyLight : technologyDark}
            alt="Technology graphic"
            width={300}
            height={300}
          />
        </motion.div>

        <div className="flex flex-col items-end justify-center mb-8">
          <motion.h3
            variants={leftToRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-3 text-3xl font-bold lg:px-6 lg:text-4xl text-light-base0D dark:text-dark-base0D"
          >
            Frameworks
          </motion.h3>
          <div className="flex flex-wrap items-center p-4 my-4 justify-evenly lg:justify-end lg:p-6 drop-shadow-xl gap-x-4 rounded-3xl gap-y-8 bg-gradient-to-r from-light-base00 to-light-base01 dark:from-dark-base01 dark:to-dark-base00">
            {frameworks.map((item) => (
              <motion.div
                variants={graphic}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={item}
              >
                <Image
                  src={`${baseURL}/${item}.svg`}
                  alt={item}
                  width="75px"
                  height="75px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-start-2 col-end-12 mb-6 lg:col-start-2 lg:col-end-10">
        <div className="flex flex-col items-start justify-center lg:mb-8">
          <motion.h3
            // TODO: Fix in mobile view
            variants={leftToRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="px-3 text-3xl font-bold lg:px-6 lg:text-4xl text-light-base0D dark:text-dark-base0D"
          >
            Others
          </motion.h3>
          <div className="flex flex-wrap items-center p-4 my-4 justify-evenly lg:justify-start lg:p-6 drop-shadow-xl rounded-3xl gap-x-5 gap-y-8 bg-gradient-to-r from-light-base01 to-light-base00 dark:from-dark-base00 dark:to-dark-base01">
            {others.map((item) => (
              <motion.div
                variants={graphic}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={item}
              >
                <Image
                  src={`${baseURL}/${item}.svg`}
                  alt={item}
                  width="75px"
                  height="75px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        variants={graphic}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center justify-center col-start-2 col-end-12 mb-8 lg:hidden"
      >
        <Image
          src={theme === "light" ? technologyLight : technologyDark}
          alt="Technology graphic"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
};

export default Technology;
