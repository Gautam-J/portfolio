import { FunctionComponent } from "react";
import ThemeChanger from "./ThemeChanger";

export const NavItem: FunctionComponent<{ name: string }> = ({ name }) => {
  return (
    <div className="tracking-tighter transition duration-200 text-light-base09 dark:text-dark-base09 hover:text-light-base0F dark:hover:text-dark-base0F">
      <a href="">{name}</a>
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

  return (
    <nav className="flex justify-between px-5 py-5 space-x-5 md:px-28 md:text-lg bg-light-base02 dark:bg-dark-base02">
      {/* Branding */}
      <div>
        <a href="#" className="flex items-center">
          <span className="font-semibold md:text-xl text-light-base06 dark:text-dark-base06 hover:text-light-base05 dark:hover:text-dark-base05">
            Gautam J
          </span>
        </a>
      </div>

      {/* Navbar Items from medium screen */}
      <div className="items-center hidden space-x-5 md:flex">
        {items.map((item) => (
          <NavItem name={item} key={item} />
        ))}
        <ThemeChanger />
      </div>

      {/* Mobile menu hamburger button */}
      <div className="flex items-center md:hidden">
        <button className="outline-none">icon goes here</button>
      </div>

      {/* Navbar Items for small screen */}
      {/* TODO: refactor this */}
      <div className="hidden">
        {items.map((item) => (
          <NavItem name={item} key={item} />
        ))}
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default NavBar;
