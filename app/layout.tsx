import React from 'react'
import './globals.css'
import { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import RequireAuth from './shared/components/RequireAuth'
import SplashScreen from './shared/components/SplashScreen'
import AxiosInterceptors from './shared/components/AxiosInterceptors'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, Zoom } from 'react-toastify'
import SSE from './shared/components/SSE'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins'
})
const APP_NAME = 'Sunnies Club'
const APP_DESCRIPTION = 'Sunnies Club description'

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
  themeColor: '#352B27',
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
  keywords: [APP_NAME]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ToastContainer
          icon={false}
          theme='colored'
          hideProgressBar
          autoClose={3000}
          position='top-center'
          closeOnClick
          pauseOnHover
          draggable
          transition={Zoom}
        />
        <SplashScreen>
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
        </SplashScreen>
      </body>
    </html>
  )
}
