import { FunctionComponent } from "react";
import ThemeChanger from "./ThemeChanger";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const NavItem: FunctionComponent<{
  name: string;
  setNavOpen: Function;
}> = ({ name, setNavOpen }) => {
  return (
    <div className="tracking-tighter transition duration-200 text-light-base09 dark:text-dark-base09 hover:text-light-base0F dark:hover:text-dark-base0F">
      <a href="" onClick={() => setNavOpen(false)}>
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
    <nav>
      <div className="flex justify-between p-5 lg:px-28 lg:text-lg bg-light-base02 dark:bg-dark-base02">
        {/* Branding */}
        <div>
          <a href="#" className="flex items-center">
            <span className="font-semibold lg:text-xl text-light-base06 dark:text-dark-base06 hover:text-light-base05 dark:hover:text-dark-base05">
              Gautam J
            </span>
          </a>
        </div>

        {/* Navbar Items from large screen */}
        <div className="items-center hidden space-x-4 lg:flex">
          {items.map((item) => (
            <NavItem name={item} setNavOpen={setNavOpen} key={item} />
          ))}
          <ThemeChanger />
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center lg:hidden">
          <button className="outline-none" onClick={() => setNavOpen(!navOpen)}>
            <GiHamburgerMenu className="w-7 h-7 text-light-base06 dark:text-dark-base06" />
          </button>
        </div>
      </div>

      {/* Navbar Items from medium screen */}
      {navOpen && (
        <div className="fixed top-0 flex flex-col items-center justify-center w-full h-full space-y-3 text-3xl backdrop-blur-sm bg-light-base00/25 dark:bg-dark-base00/25">
          <div>
            <IoMdClose
              onClick={() => setNavOpen(false)}
              className="text-light-base06 dark:text-dark-base06"
            />
          </div>
          {items.map((item) => (
            <NavItem name={item} setNavOpen={setNavOpen} key={item} />
          ))}
          <ThemeChanger />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
