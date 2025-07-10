import { Header } from "components/header"
import { Footer } from "components/footer"
import { AboutContent } from "components/about-content"

export const metadata = {
  title: "소개 | 이준수 portfolio",
  description: "저에 대한 소개와 기술 스택, 경력 등을 확인하실 수 있습니다.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
