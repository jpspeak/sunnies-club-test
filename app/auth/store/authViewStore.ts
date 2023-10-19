import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type View = 'home' | 'signup' | 'signin'

type AuthStore = {
  view: View
  setView: (view: View) => void
  viewSignup: () => void
  viewSignin: () => void
  viewHome: () => void
}

export const useAuthViewStore = create<
  AuthStore,
  [['zustand/devtools', AuthStore]]
>(
  devtools((set) => ({
    view: 'home',
    setView: (view: View) => set(() => ({ view })),
    viewSignup: () => set({ view: 'signup' }),
    viewSignin: () => set({ view: 'signin' }),
    viewHome: () => set({ view: 'home' })
  }))
)
