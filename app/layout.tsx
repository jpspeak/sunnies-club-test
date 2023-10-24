import React from 'react'
import './globals.css'
import { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import RequireAuth from './shared/components/RequireAuth'
import SplashScreen from './shared/components/SplashScreen'
import AxiosInterceptors from './shared/components/AxiosInterceptors'
import SSE from './shared/components/SSE'
import ToastProvider from './shared/components/ToastProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins'
})
const APP_NAME = 'Sunnies Club'
const APP_DESCRIPTION =
  'Welcome to the Sunnies Loyalty Program, where every sunny day becomes even brighter! Join our exclusive Sunnies Club and enjoy a world of fabulous perks. Earn points with every purchase, unlock VIP access to our latest eyewear collections, and receive special offers tailored just for you.'

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default'
  },
  formatDetection: {
    telephone: false
  },
  themeColor: '#CE5119',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/icons/site/apple-touch-icon.png'
    },
    { rel: 'icon', sizes: '32x32', url: '/icons/site/favicon-32x32.png' },
    { rel: 'icon', sizes: '16x16', url: '/icons/site/favicon-16x16.png' }
  ],
  keywords: ['Sunnies Club', 'Loyalty Program', 'Earn Points', 'Redeem Points']
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <SplashScreen>
          <ToastProvider>
            <AxiosInterceptors>
              <RequireAuth
                except={[
                  '/',
                  '/auth',
                  '/account/verify',
                  '/reset-password-verification',
                  '/reset-password'
                ]}
              >
                <SSE />
                {children}
              </RequireAuth>
            </AxiosInterceptors>
          </ToastProvider>
        </SplashScreen>
      </body>
    </html>
  )
}
