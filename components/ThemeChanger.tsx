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

  return (
    <button onClick={changeTheme}>
      {/* TODO: add hover text */}
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};

export default ThemeChanger;
