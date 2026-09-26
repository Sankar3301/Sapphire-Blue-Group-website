import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sapphirebluegroup.co.za'),
  title: {
    default: 'Sapphire Blue Group | Technology Advisory & Intelligent Systems',
    template: '%s | Sapphire Blue Group',
  },
  description: 'Sapphire Blue Group helps ambitious organisations make technology work harder through clear advisory, resilient infrastructure, and intelligent systems.',
  keywords: ['technology advisory South Africa', 'digital transformation', 'cloud infrastructure', 'data analytics', 'Sapphire Blue Group'],
  authors: [{ name: 'Sapphire Blue Group' }],
  creator: 'Sapphire Blue Group',
  publisher: 'Sapphire Blue Group',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://sapphirebluegroup.co.za',
    title: 'Sapphire Blue Group | Better systems. Brighter futures.',
    description: 'Enterprise technology advisory and intelligent systems for organisations ready to move forward.',
    siteName: 'Sapphire Blue Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sapphire Blue Group | Better systems. Brighter futures.',
    description: 'Enterprise technology advisory and intelligent systems for organisations ready to move forward.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
