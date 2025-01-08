import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setTheme(theme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
};

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="cursor-pointer  text-neutral-800 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-200"
      onClick={toggleTheme}
    >
      {theme == "light" ? <Moon /> : <Sun />}
    </div>
  );
}

export { useTheme };
