import { FunctionComponent, useEffect } from "react";
import { useTheme } from "next-themes";
import { useState } from "react";

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
      {/* TODO: add icons */}
      {theme === "light" ? <p>Dark Mode</p> : <p>Light Mode</p>}
    </button>
  );
};

export default ThemeChanger;
