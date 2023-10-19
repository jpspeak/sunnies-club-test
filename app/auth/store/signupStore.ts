import { create } from 'zustand'

const initialState = {
  isSubmitting: false,
  isSignupSucessful: false
}

type SignupStore = {
  isSubmitting: boolean
  isSignupSucessful: boolean
  setIsSubmitting: (isSubmitting: boolean) => void
  setSignupSuccessful: () => void
  reset: () => void
}

export const useSignupStore = create<SignupStore>((set) => ({
  ...initialState,
  setIsSubmitting: (isSubmitting: boolean) => set(() => ({ isSubmitting })),
  setSignupSuccessful: () => set(() => ({ isSignupSucessful: true })),
  reset: () => set(initialState)
}))
