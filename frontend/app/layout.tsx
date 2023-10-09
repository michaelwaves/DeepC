import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
const noto = Noto_Sans({ subsets: ['latin'], weight: '400' })
import Header from '@/components/header/Header'

export const metadata: Metadata = {
  title: 'DeepC Translate: The Worlds Most Chinese Translator',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={noto.className}>
        <Header />
        {children}</body>
    </html>
  )
}
