import '../globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import TranslateNavbar from "@/components/translator/TranslateNavbar"

const noto = Noto_Sans({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'DeepC Translate',
  description: 'Generated by create next app',
}

export default function TranslatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-gray-200">
      <div className={noto.className}>
        <TranslateNavbar />
        {children}
      </div>
    </main>
  )
}
