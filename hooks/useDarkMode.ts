// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkPref = localStorage.getItem("theme") === "dark";
    setIsDark(darkPref);
    document.documentElement.classList.toggle("dark", darkPref);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return { isDark, toggleDarkMode };
}
