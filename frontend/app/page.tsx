import Header from "@/components/header/Header"
import TranslateFiles from "@/components/translator/TranslateFiles"
import TranslateNavbar from "@/components/translator/TranslateNavbar"
import TranslateText from "@/components/translator/TranslateText"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Header />
      <TranslateNavbar />
      <TranslateText />
    </main>
  )
}
