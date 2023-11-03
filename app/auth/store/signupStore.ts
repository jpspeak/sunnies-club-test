import { create } from 'zustand'

const initialState = {
  isSubmitting: false
}

type SignupStore = {
  isSubmitting: boolean
  setIsSubmitting: (isSubmitting: boolean) => void
  reset: () => void
}

export const useSignupStore = create<SignupStore>((set) => ({
  ...initialState,
  setIsSubmitting: (isSubmitting: boolean) => set(() => ({ isSubmitting })),
  reset: () => set(initialState)
}))
