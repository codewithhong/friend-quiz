import { cx } from '@tszhong0411/utils'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import '@/styles/globals.css'

import Footer from '@/components/footer'
import Header from '@/components/header'

import { site } from '@/config/site'

import CustomToaster from './custom-toaster'

import { WithChildren } from '@/types'

type RootLayoutProps = WithChildren

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    title: site.name,
    card: 'summary_large_image',
    site: '@tszhong0411',
    creator: '@tszhong0411',
  },
  keywords: site.keywords,
  themeColor: '#000',
  creator: 'tszhong0411',
  openGraph: {
    url: `${site.url}`,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: 'https://honghong.me/images/projects/friend-quiz/cover.png',
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [...site.favicons],
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html
      lang='en-US'
      className={cx(inter.variable, notoSansTC.variable, 'dark scroll-smooth')}
    >
      <body className='overflow-x-hidden bg-accent-bg font-default text-accent-fg'>
        <Header />
        <main className='relative mx-auto mb-16 max-w-4xl px-2 py-24 sm:px-8'>
          {children}
        </main>
        <CustomToaster />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout