import { create } from 'zustand'

type AuthState = {
  isAuthenticated: boolean
}
type AuthAction = {
  signin: () => void
  signout: () => void
}

const useAuthStore = create<AuthState & AuthAction>((set) => ({
  isAuthenticated: false,
  signin: () => set(() => ({ isAuthenticated: true })),
  signout: () => set(() => ({ isAuthenticated: false }))
}))

export default useAuthStore
