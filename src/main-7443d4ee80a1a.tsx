import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply the stored theme or default to system preference
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const root = window.document.documentElement;

  if (savedTheme === "dark") {
    root.classList.add("dark");
  } else if (savedTheme === "light") {
    root.classList.remove("dark");
  } else {
    // Use system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
};

// Initialize theme before rendering
initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
