import { FunctionComponent } from "react";
import ThemeChanger from "./ThemeChanger";

const NavBar: FunctionComponent = () => {
  return (
    <div className="bg-light-base01 dark:bg-dark-base01">
      NavBar
      <ThemeChanger />
    </div>
  );
};

export default NavBar;
