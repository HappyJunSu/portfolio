"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "홈", href: "/" },
    { name: "프로젝트", href: "/projects" },
    { name: "소개", href: "/about" },
    { name: "연락처", href: "/contact" },
  ]

  const renderNavLinks = () =>
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          "text-muted-foreground hover:text-foreground transition-colors",
          pathname === item.href && "text-foreground font-medium",
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    ))

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-600">이준수 </span>Portfolio
          </Link>

          {/* 데스크탑 내비게이션 */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="주 내비게이션">
            {renderNavLinks()}
            <ThemeToggle />
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="메뉴 열기"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t"
            aria-label="모바일 내비게이션"
          >
            <div className="flex flex-col space-y-4 pt-4">{renderNavLinks()}</div>
          </nav>
        )}
      </div>
    </header>
  )
}
