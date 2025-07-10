import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            안녕하세요, 저는 <span className="text-blue-600">이준수</span>입니다
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            IT 분야에서 성장하며 의미 있는 서비스를 만들고자 하는 취업 준비생입니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/projects">프로젝트 보기</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="/about">자세히 알아보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
