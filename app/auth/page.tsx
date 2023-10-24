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
import { useElementSizesStore } from './store/elementSizesStore'
import { isDesktop } from 'react-device-detect'
import { toast } from 'react-toastify'

export default function Auth() {
  const views = ['home', 'signup', 'signin']

  const { view, setView, viewSignup, viewSignin, viewHome } = useAuthViewStore(
    (state) => state
  )

  const searchParams = useSearchParams()
  const initialView = searchParams.get('initialView')

  const {
    sizesInitialized,
    drawerHeight,
    signinBtnWidth,
    signupBtnWidth,
    initializeSizes,
    setDrawerHeight,
    setSigninBtnWidth,
    setSignupBtnWidth
  } = useElementSizesStore((state) => state)

  const mainContainerRef = useRef<HTMLDivElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const signupBtnRef = useRef<HTMLButtonElement>(null)
  const signinBtnRef = useRef<HTMLButtonElement>(null)
  const signupSubmitBtnRef = useRef<HTMLButtonElement>(null)
  const signinSubmitBtnRef = useRef<HTMLButtonElement>(null)

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
    viewSignup()
  }

  const handleViewSigninClick = () => {
    viewSignin()
  }

  const handleBackClick = () => {
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
        setDrawerHeight(drawerRef.current.offsetHeight)
      }
      if (signupBtnRef.current) {
        setSignupBtnWidth(signupBtnRef.current.getBoundingClientRect().width)
      }
      if (signinBtnRef.current) {
        setSigninBtnWidth(signinBtnRef.current.getBoundingClientRect().width)
      }
    }
    if (!sizesInitialized) {
      setSizesForTransitionToWork()
      initializeSizes()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Set main container height based on view port inner height(without toolbars)
  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.style.minHeight = `${window.innerHeight}px`
    }
  }, [])

  // Show swicth to mobile popup
  useEffect(() => {
    if (isDesktop) {
      toast.info(
        <div>
          <p className='text-center text-soft-black-700'>
            Switch to mobile for an experience like no other and don&apos;t miss
            out on exclusive rewards and VIP treatment!
          </p>
          <Button onClick={() => toast.dismiss()} className='mt-4'>
            Got it
          </Button>
        </div>,
        {
          theme: 'light',
          toastId: 'info',
          autoClose: false,
          closeButton: false
        }
      )
    }
  }, [])

  // FOR ANIMATION | Set exact width or height value for transition to work
  useEffect(() => {
    if (view === 'home') {
      if (drawerRef.current && sizesInitialized) {
        drawerRef.current.style.height = `${drawerHeight}px`
      }
      if (signupBtnRef.current && sizesInitialized) {
        signupBtnRef.current.style.width = `${signupBtnWidth}px`
      }
      if (signinBtnRef.current && sizesInitialized) {
        signinBtnRef.current.style.width = `${signinBtnWidth}px`
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, sizesInitialized])

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
    <MainContainer ref={mainContainerRef} className='relative pb-[110px]'>
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
          'fixed bottom-0 flex w-full items-end max-w-md transition-all before:block before:absolute before:w-full before:h-full before:rounded-t-full before:bg-red-700',
          view !== 'home'
            ? '!h-full before:h-[calc(100vh+300px)] before:-top-[300px] duration-300'
            : 'duration-1000'
        )}
      >
        <div className='flex flex-col justify-between w-full pt-[50px] pb-[40px] px-[16px] h-full'>
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
            className={twMerge('relative flex flex-col h-full overflow-hidden')}
          >
            <div
              className={twMerge(
                'relative h-[80px] text-white mx-auto transition-all duration-1000 scale-100',
                view !== 'home' && 'scale-75'
              )}
            />

            <p
              className={twMerge(
                'text-white text-center pt-[40px] px-[44px] bottom-0 relative mt-auto transition-all duration-700',
                view === 'home' ? 'opacity-100 z-10' : 'opacity-0 z-[-1]'
              )}
            >
              Get rewarded and earn exclusive access to launches, VIP perks and
              more every time you shop.
            </p>
          </div>

          <div
            className={twMerge(
              'w-full absolute left-0 bottom-0 pt-[50px] transition-all duration-[800ms]',
              view !== 'home' && '!h-full'
            )}
            style={{ height: drawerHeight || '100%' }}
          >
            <LogoIcon
              className={twMerge(
                'absolute h-[80px] text-white left-1/2 -translate-x-1/2 transition-all duration-500 scale-100',
                view !== 'home' && 'scale-75'
              )}
            />
          </div>

          <div
            className={`flex gap-[8px] mt-[40px] relative bg-red-700 z-10 ${
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

      <div
        className={twMerge(
          'absolute top-[calc(50px+60px+40px)] transition-all duration-700 z-[-1] opacity-0 bottom-[110px] overflow-y-auto',
          view === 'signup' && '!z-10 !opacity-100'
        )}
      >
        {isSignupSucessful ? (
          <SignupSuccessful containerClass='px-4' />
        ) : (
          <SignupForm ref={signupSubmitBtnRef} containerClass='px-4' />
        )}
      </div>

      <div
        className={twMerge(
          'absolute top-[calc(50px+60px+40px)] transition-all duration-700 z-[-1] opacity-0 bottom-[110px] overflow-y-auto',
          view === 'signin' && '!z-10 !opacity-100'
        )}
      >
        <SigninForm ref={signinSubmitBtnRef} containerClass='px-4' />
      </div>
    </MainContainer>
  )
}
