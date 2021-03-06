import { FunctionComponent } from "react";
import ThemeChanger from "./ThemeChanger";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navBar, mobileNavBar } from "../animations/navbar";

const NavItem: FunctionComponent<{
  name: string;
  setNavOpen: null | Function;
}> = ({ name, setNavOpen }) => {
  return (
    <div className="font-bold tracking-tighter transition duration-200 hover:underline lg:font-normal lg:text-lg text-light-base08 dark:text-dark-base08">
      <a
        href={`#${name}`}
        onClick={() => (setNavOpen ? setNavOpen(false) : {})}
      >
        {name}
      </a>
    </div>
  );
};

const NavBar: FunctionComponent = () => {
  const items: string[] = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Technology",
    "Projects",
    "Connect",
  ];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <motion.nav
      variants={navBar}
      initial="initial"
      animate="animate"
      className="bg-gradient-to-b from-light-base01 to-light-base00 dark:from-dark-base01 dark:to-dark-base00"
    >
      <div className="grid items-center grid-cols-12 gap-1 pt-4 lg:gap-5">
        {/* Branding */}
        <div className="col-span-5 col-start-2 transition duration-300 lg:col-span-2 lg:col-start-2">
          <a href="#Connect">
            <span className="text-2xl font-bold lg:text-3xl text-light-base09 dark:text-dark-base09 hover:text-light-base09/75 hover:dark:text-dark-base09/75">
              Gautam J
            </span>
          </a>
        </div>

        {/* Navbar Items from large screen */}
        <div className="hidden col-span-6 col-start-6 mr-10 lg:block">
          <div className="flex items-center justify-center space-x-4">
            {items.map((item) => (
              <NavItem name={item} setNavOpen={null} key={item} />
            ))}
            <ThemeChanger />
          </div>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="absolute flex items-center right-8 lg:hidden">
          <button
            aria-label="Navbar menu"
            className=""
            onClick={() => setNavOpen(!navOpen)}
          >
            <GiHamburgerMenu className="w-7 h-7 text-light-base05 dark:text-dark-base05" />
          </button>
        </div>
      </div>

      {/* Mobile navbar items */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            variants={mobileNavBar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 z-50 flex flex-col items-center justify-center w-full h-full space-y-3 text-3xl backdrop-blur-sm bg-light-base00/50 dark:bg-dark-base00/50"
          >
            <button>
              <IoMdClose
                onClick={() => setNavOpen(false)}
                className="text-light-base05 dark:text-dark-base05"
              />
            </button>
            {items.map((item) => (
              <NavItem name={item} setNavOpen={setNavOpen} key={item} />
            ))}
            <ThemeChanger />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
