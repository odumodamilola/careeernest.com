import { motion, AnimatePresence } from "framer-motion";

interface DarkModeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function DarkModeToggle({ theme, toggleTheme }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      aria-label={`Switch to ${
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
      } mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {theme === "dark" ? (
            <i className="fas fa-moon text-yellow-500" />
          ) : (
            <i className="fas fa-sun text-yellow-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}