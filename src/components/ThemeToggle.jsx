import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
  onClick={toggleTheme}
  className={cn(
    "fixed top-5 right-5 z-50 p-2 rounded-full transition-all",
    "bg-white/80 backdrop-blur-lg border border-gray-200",
    "shadow-sm hover:shadow-md",
    "dark:bg-gray-800/80 dark:border-gray-700",
    "max-sm:hidden"
  )}
>
  {isDarkMode ? (
    <Sun className="h-5 w-5 text-amber-400" />
  ) : (
    <Moon className="h-5 w-5 text-indigo-600" />
  )}
</button>
  );
};