import { create } from 'zustand'

export type User = {
  name: string
  isLoggedIn: boolean
}

type AuthStore = {
  user: User
  login: (name: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: {
    name: 'Guest',
    isLoggedIn: false,
  },
  login: (name) =>
    set({
      user: {
        name: name.trim() || 'Guest',
        isLoggedIn: true,
      },
    }),
  logout: () =>
    set({
      user: {
        name: 'Guest',
        isLoggedIn: false,
      },
    }),
}))
