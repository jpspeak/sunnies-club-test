import { create } from 'zustand'

type SigninStore = {
  isSubmitting: boolean
  setIsSubmitting: (isSubmitting: boolean) => void
}

export const useSigninStore = create<SigninStore>((set) => ({
  isSubmitting: false,
  setIsSubmitting: (isSubmitting: boolean) => set(() => ({ isSubmitting }))
}))
