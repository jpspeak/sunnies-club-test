import React from 'react'
import './globals.css'
import { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import RequireAuth from './shared/components/RequireAuth'
import SplashScreen from './shared/components/SplashScreen'
import SSE from './shared/components/SSE'
import ToastProvider from './shared/components/ToastProvider'
import SwitchToMobileModal from './shared/components/SwitchToMobileModal'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins'
})
const APP_NAME = 'Sunnies Club'
const APP_DESCRIPTION =
  'Finally, points for every purchase. Welcome to the Sunnies Club! Sign up in-store and on sunniesclub.com and get Sunnies Club perks.'

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
            <SwitchToMobileModal />
            <RequireAuth
              except={[
                '/',
                '/auth',
                '/auth/signup-successful',
                '/account/verify',
                '/reset-password-verification',
                '/reset-password'
              ]}
            >
              <SSE />
              {children}
            </RequireAuth>
          </ToastProvider>
        </SplashScreen>
      </body>
    </html>
  )
}
