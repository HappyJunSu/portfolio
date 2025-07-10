import { Header } from "components/header"
import { Footer } from "components/footer"
import { ContactForm } from "components/contact-form"

export const metadata = {
  title: "연락처 | 포트폴리오",
  description: "궁금한 점이나 협업 제안이 있으시면 연락해주세요.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">연락처</h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
