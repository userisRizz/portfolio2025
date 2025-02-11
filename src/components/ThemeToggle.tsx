import { useState, useEffect, useCallback } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { log } from "console";

const ThemeToggle = () => {
  const [theme, setTheme] = useState< "dark" | "light" | "system">("system");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: "light" | "dark" | "system") => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }

    localStorage.setItem("theme", newTheme);
  };

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themeIcons = useCallback(() => {
    console.log(theme);
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-muted transition-colors relative w-[36px] h-[36px]"
        aria-label="Toggle theme"
      >
        {theme === "light" && <Sun size={20} />}
        {theme === "dark" && <Moon size={20} />}
        {theme === "system" && <Monitor size={20} />}
      </button>
    );
  }, [theme, isOpen]);

  return (
    <div className="relative">
      {themeIcons()}

      {isOpen && (
        <div className="absolute right-0 mt-2 glass rounded-lg py-2 min-w-[150px] animate-fade-in">
          <button
            onClick={() => handleThemeChange("light")}
            className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:text-primary transition-colors"
          >
            <Sun size={16} />
            <span>Light</span>
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:text-primary transition-colors"
          >
            <Moon size={16} />
            <span>Dark</span>
          </button>
          <button
            onClick={() => handleThemeChange("system")}
            className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:text-primary transition-colors"
          >
            <Monitor size={16} />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
