'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Button from '../shared/components/Button'
import { twMerge } from 'tailwind-merge'
import TopNavBar from '../shared/components/TopNavbar'
import SignupForm from './components/SignupForm'
import { useSigninStore } from './store/signinStore'
import { useSignupStore } from './store/signupStore'
import SignupSuccessful from './components/SignupSuccessful'
import { View, useAuthViewStore } from './store/authViewStore'
import { useSearchParams } from 'next/navigation'
import Spinner from '../shared/components/Spinner'
import ArrowLeft from '../shared/components/icons/ArrowLeftIcon'
import LogoIcon from '../shared/components/icons/LogoIcon'
import SigninForm from './components/SigninForm'
import MainContainer from '../shared/components/MainContainer'
import './style.css'

export default function Auth() {
  const views = ['home', 'signup', 'signin']

  const { view, setView, viewSignup, viewSignin, viewHome } = useAuthViewStore(
    (state) => state
  )

  const searchParams = useSearchParams()
  const initialView = searchParams.get('initialView')

  const elementSizes = useRef({
    drawerHeight: 0,
    signupBtnWidth: 0,
    signinBtnWidth: 0
  })

  const drawerRef = useRef<HTMLDivElement>(null)
  const signupBtnRef = useRef<HTMLButtonElement>(null)
  const signinBtnRef = useRef<HTMLButtonElement>(null)
  const signupSubmitBtnRef = useRef<HTMLButtonElement>(null)
  const signinSubmitBtnRef = useRef<HTMLButtonElement>(null)
  const signupWrapperRef = useRef<HTMLDivElement>(null)
  const signinWrapperRef = useRef<HTMLDivElement>(null)
  const authTextRef = useRef<HTMLParagraphElement>(null)

  const { isSubmitting: isSubmittingSignup, isSignupSucessful } =
    useSignupStore((state) => state)
  const isSubmittingSignin = useSigninStore((state) => state.isSubmitting)

  const submitSignupForm = () => {
    signupSubmitBtnRef.current?.click()
  }

  const submitSigninForm = () => {
    signinSubmitBtnRef.current?.click()
  }

  const handleViewSignupClick = () => {
    authTextRef.current?.classList.add('hideText')
    authTextRef.current?.classList.remove('showText')

    signupWrapperRef.current?.classList.add('showForm')
    signupWrapperRef.current?.classList.remove('hideForm')

    viewSignup()
  }

  const handleViewSigninClick = () => {
    authTextRef.current?.classList.add('hideText')
    authTextRef.current?.classList.remove('showText')

    signinWrapperRef.current?.classList.add('showForm')
    signinWrapperRef.current?.classList.remove('hideForm')

    viewSignin()
  }

  const handleBackClick = () => {
    authTextRef.current?.classList.add('showText')
    authTextRef.current?.classList.remove('hideText')

    signupWrapperRef.current?.classList.add('hideForm')
    signupWrapperRef.current?.classList.remove('showForm')

    signinWrapperRef.current?.classList.add('hideForm')
    signinWrapperRef.current?.classList.remove('showForm')

    viewHome()
  }

  const resetSignupStore = useSignupStore((state) => state.reset)

  useEffect(() => {
    if (view === 'home') {
      resetSignupStore()
    }
  }, [resetSignupStore, view])

  // Set initial view depending on url "initialView" query params
  useEffect(() => {
    if (initialView && views.includes(initialView)) {
      setView(initialView as View)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setView, initialView])

  // FOR ANIMATION | Save initial element sizes for reference
  useEffect(() => {
    const setSizesForTransitionToWork = () => {
      if (drawerRef.current) {
        const drawerHeight = drawerRef.current.offsetHeight
        elementSizes.current = { ...elementSizes.current, drawerHeight }
      }
      if (signupBtnRef.current) {
        const signupBtnWidth =
          signupBtnRef.current.getBoundingClientRect().width
        elementSizes.current = { ...elementSizes.current, signupBtnWidth }
      }
      if (signinBtnRef.current) {
        const signinBtnWidth =
          signinBtnRef.current.getBoundingClientRect().width
        elementSizes.current = { ...elementSizes.current, signinBtnWidth }
      }
    }

    setSizesForTransitionToWork()
  }, [])

  // FOR ANIMATION | Set exact width or height value for transition to work
  useEffect(() => {
    if (view === 'home') {
      if (drawerRef.current && elementSizes.current.drawerHeight > 0) {
        drawerRef.current.style.height = `${elementSizes.current.drawerHeight}px`
      }
      if (signupBtnRef.current && elementSizes.current.signupBtnWidth > 0) {
        signupBtnRef.current.style.width = `${elementSizes.current.signupBtnWidth}px`
      }
      if (signinBtnRef.current && elementSizes.current.signinBtnWidth > 0) {
        signinBtnRef.current.style.width = `${elementSizes.current.signinBtnWidth}px`
      }
    }
  }, [view])

  // FOR ANIMATION | Set signup or signin button position to absolute
  useEffect(() => {
    if (view === 'signup' && signupBtnRef.current && signinBtnRef.current) {
      signupBtnRef.current.style.position = 'absolute'
      signinBtnRef.current.style.position = 'relative'
    }
    if (view === 'signin' && signinBtnRef.current && signupBtnRef.current) {
      signinBtnRef.current.style.position = 'absolute'
      signupBtnRef.current.style.position = 'relative'
    }
  }, [view])

  // FOR ANIMATION | Class for signup button animation
  const signupBtnAnimClass = (v: View) => {
    const defaultStyle = 'transition-all duration-700'
    switch (v) {
      case 'signup':
        return `${defaultStyle} !w-[100%]`
      case 'signin':
        return `${defaultStyle} invisible opacity-0`
      default:
        return defaultStyle
    }
  }

  // FOR ANIMATION | Class for signin button animation
  const loginBtnClass = (v: View) => {
    const defaultStyle =
      'transition-all visible opacity-100 duration-700 ml-auto right-0'
    switch (v) {
      case 'signup':
        return `${defaultStyle} invisible opacity-0`
      case 'signin':
        return `${defaultStyle} !w-[100%]`
      default:
        return defaultStyle
    }
  }

  return (
    <MainContainer>
      <div className='h-[50vh]'>
        <Image
          src='/images/auth-image.png'
          alt='Auth image'
          height={800}
          width={800}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        ref={drawerRef}
        className={twMerge(
          'fixed bottom-0 flex w-full items-end transition-all duration-700 bg-red-700 md:max-w-md',
          view !== 'home' ? 'bg-opacity-100 !h-full' : 'bg-opacity-0'
        )}
      >
        <div
          className={twMerge(
            'flex flex-col justify-between bg-red-700 transition-all duration-700 w-full pt-[60px] pb-[40px] px-[16px] rounded-t-full h-full',
            view !== 'home' && 'rounded-t-none'
          )}
        >
          {view !== 'home' && (
            <TopNavBar
              className='left-0 bg-tranparent'
              backButton={
                <button onClick={handleBackClick}>
                  <ArrowLeft className='text-white' />
                </button>
              }
            />
          )}
          <div
            className={twMerge(
              'relative flex flex-col h-full overflow-hidden',
              [
                view !== 'home' && 'overflow-y-auto',
                view !== 'home' && isSignupSucessful && 'flex flex-col grow'
              ]
            )}
          >
            <LogoIcon
              className={twMerge(
                'h-[80px] text-white mx-auto transition-all duration-700 scale-100',
                view !== 'home' && 'scale-75'
              )}
            />

            <p
              ref={authTextRef}
              className={twMerge(
                'text-white text-center pt-[40px] px-[44px] bottom-0 relative mt-auto'
              )}
            >
              Get rewarded and earn exclusive access to launches, VIP perks and
              more every time you shop.
            </p>

            <div
              ref={signupWrapperRef}
              className={`absolute top-0 opacity-0 pt-[80px]`}
            >
              {isSignupSucessful ? (
                <SignupSuccessful />
              ) : (
                <SignupForm ref={signupSubmitBtnRef} />
              )}
            </div>

            <div
              ref={signinWrapperRef}
              className={`absolute top-0 opacity-0 pt-[80px]`}
            >
              <SigninForm ref={signinSubmitBtnRef} />
            </div>
          </div>

          <div
            className={`flex gap-[8px] mt-[40px] relative ${
              isSignupSucessful && 'hidden'
            }`}
          >
            <Button
              ref={signupBtnRef}
              onClick={
                view === 'home' ? handleViewSignupClick : submitSignupForm
              }
              className={`text-red-700 bg-white ${signupBtnAnimClass(
                view as View
              )}`}
            >
              {isSubmittingSignup ? (
                <Spinner className='text-red-700' />
              ) : (
                'Sign up'
              )}
            </Button>

            <Button
              ref={signinBtnRef}
              onClick={
                view === 'home' ? handleViewSigninClick : submitSigninForm
              }
              variant='outline'
              className={`text-white border-white w-max ${loginBtnClass(
                view as View
              )}`}
            >
              {isSubmittingSignin ? (
                <Spinner className='text-white' />
              ) : (
                'Log in'
              )}
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}
