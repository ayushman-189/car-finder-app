// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setIsDarkMode(true);
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Component {...pageProps} />
    </div>
  );
}
