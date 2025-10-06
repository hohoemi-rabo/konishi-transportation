import { create } from "zustand";
import { persist } from "zustand/middleware";

type DarkModeStore = {
  isDark: boolean;
  toggle: () => void;
  setDark: (isDark: boolean) => void;
  initialize: () => void;
};

export const useDarkModeStore = create<DarkModeStore>()(
  persist(
    (set) => ({
      isDark: false,
      toggle: () =>
        set((state) => {
          const newIsDark = !state.isDark;
          if (typeof document !== "undefined") {
            if (newIsDark) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }
          return { isDark: newIsDark };
        }),
      setDark: (isDark: boolean) =>
        set(() => {
          if (typeof document !== "undefined") {
            if (isDark) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }
          return { isDark };
        }),
      initialize: () =>
        set((state) => {
          // Check localStorage first
          if (typeof window !== "undefined") {
            const stored = localStorage.getItem("dark-mode-storage");
            if (stored) {
              try {
                const { state: storedState } = JSON.parse(stored);
                const isDark = storedState.isDark ?? false;
                if (isDark) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                return { isDark };
              } catch (e) {
                console.error("Failed to parse dark mode from localStorage", e);
              }
            }

            // Fallback to system preference
            const prefersDark = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches;
            if (prefersDark) {
              document.documentElement.classList.add("dark");
            }
            return { isDark: prefersDark };
          }
          return state;
        }),
    }),
    {
      name: "dark-mode-storage",
    }
  )
);
