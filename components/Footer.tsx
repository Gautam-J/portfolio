import { FunctionComponent } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { leftToRight } from "../animations/intro";

const Footer: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-12 bg-light-base00 dark:bg-dark-base00">
      <motion.div
        variants={leftToRight}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex items-center justify-start col-start-2 col-end-12 py-4 gap-x-2 text-light-base09 dark:text-dark-base09"
      >
        <AiOutlineCopyrightCircle />
        <p>Copyright {new Date().getFullYear()}, Gautam J</p>
      </motion.div>
    </div>
  );
};

export default Footer;
