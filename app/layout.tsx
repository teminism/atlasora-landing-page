import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AtlasOra - Revolutionise Your Booking Experience',
  description: 'Connect hosts and guests with confidence. Experience seamless bookings, instant payouts, and industry-leading safety features.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}