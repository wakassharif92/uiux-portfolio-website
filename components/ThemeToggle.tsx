"use client";

import { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { MoonStar, Sun } from "lucide-react";
import { getServerSnapshot, getSnapshot, setTheme, subscribe } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className={`relative flex h-7 w-12 shrink-0 items-center rounded-full p-1 shadow-inner transition-colors duration-300 ${
        isDark ? "bg-[#161b33]" : "bg-[#e7e7e2]"
      } ${className}`}
    >
      <motion.span
        animate={{ x: isDark ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`flex h-5 w-5 items-center justify-center rounded-full shadow-sm ${
          isDark ? "bg-[#2b3468] text-slate-100" : "bg-white text-amber-400"
        }`}
      >
        {isDark ? <MoonStar size={12} /> : <Sun size={12} />}
      </motion.span>
    </button>
  );
}
