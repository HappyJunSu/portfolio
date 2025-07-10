import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-blue-600">이준수 </span>Portfolio
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">© 2025 이준수 Portfolio. All rights reserved.</p>
              <nav className="flex space-x-6">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  홈
                </Link>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  프로젝트
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  소개
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  연락처
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
