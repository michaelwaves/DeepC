import TranslateNavbar from "@/components/translator/TranslateNavbar"
import TranslateText from "@/components/translator/TranslateText"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 bg-gray-200">
      <TranslateNavbar />
      <TranslateText />
    </main>
  )
}
