import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark'

type ThemeStore = {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),
  setTheme: (theme) => set({ theme }),
}))
