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
    <div className="text-lg tracking-tighter transition duration-200">
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
      <div className="grid items-center grid-cols-12 gap-5 pt-4">
        {/* Branding */}
        <div className="col-span-2 col-start-2">
          {/* TODO: add link to contact section */}
          <a href="#">
            <span className="text-3xl">Gautam J</span>
          </a>
        </div>

        {/* Navbar Items from large screen */}
        <div className="hidden col-span-7 col-start-6 mr-10 lg:block">
          <div className="flex items-center justify-center space-x-4">
            {items.map((item) => (
              <NavItem name={item} setNavOpen={setNavOpen} key={item} />
            ))}
            <ThemeChanger />
          </div>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center lg:hidden">
          <button className="outline-none" onClick={() => setNavOpen(!navOpen)}>
            <GiHamburgerMenu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile navbar items */}
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
