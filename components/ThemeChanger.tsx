import { FunctionComponent, useEffect } from "react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeChanger: FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const className: string =
    "w-7 h-7 text-light-base05 dark:text-dark-base05 transition duration-200 hover:scale-125";

  return (
    <button onClick={changeTheme} className="outline-none">
      {/* TODO: add hover text - $ sudo dark / light  */}
      {theme === "light" ? (
        <MdOutlineDarkMode className={className} />
      ) : (
        <MdOutlineLightMode className={className} />
      )}
    </button>
  );
};

export default ThemeChanger;
