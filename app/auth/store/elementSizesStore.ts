import { create } from 'zustand'

type ElementSizesStore = {
  initialized: boolean
  drawerHeight: number
  signupBtnWidth: number
  signinBtnWidth: number
  initialize: () => void
  setDrawerHeight: (drawerHeight: number) => void
  setSignupBtnWidth: (signupBtnWidth: number) => void
  setSigninBtnWidth: (signinBtnWidth: number) => void
}

export const useElementSizesStore = create<ElementSizesStore>((set) => ({
  initialized: false,
  drawerHeight: 0,
  signupBtnWidth: 0,
  signinBtnWidth: 0,
  initialize: () => set(() => ({ initialized: true })),
  setDrawerHeight: (drawerHeight) => set(() => ({ drawerHeight })),
  setSignupBtnWidth: (signupBtnWidth) => set(() => ({ signupBtnWidth })),
  setSigninBtnWidth: (signinBtnWidth) => set(() => ({ signinBtnWidth }))
}))
