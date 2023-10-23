import { create } from 'zustand'

type ElementSizesStore = {
  sizesInitialized: boolean
  drawerHeight: number
  signupBtnWidth: number
  signinBtnWidth: number
  initializeSizes: () => void
  setDrawerHeight: (drawerHeight: number) => void
  setSignupBtnWidth: (signupBtnWidth: number) => void
  setSigninBtnWidth: (signinBtnWidth: number) => void
}

export const useElementSizesStore = create<ElementSizesStore>((set) => ({
  sizesInitialized: false,
  drawerHeight: 0,
  signupBtnWidth: 0,
  signinBtnWidth: 0,
  initializeSizes: () => set(() => ({ sizesInitialized: true })),
  setDrawerHeight: (drawerHeight) => set(() => ({ drawerHeight })),
  setSignupBtnWidth: (signupBtnWidth) => set(() => ({ signupBtnWidth })),
  setSigninBtnWidth: (signinBtnWidth) => set(() => ({ signinBtnWidth }))
}))
