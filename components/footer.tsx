import Link from "next/link"

export function Footer() {
  const navItems = [
    { href: "/", label: "홈" },
    { href: "/projects", label: "프로젝트" },
    { href: "/about", label: "소개" },
    { href: "/contact", label: "연락처" },
  ]

  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* 상단 포트폴리오 명 */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-blue-600">이준수 </span>Portfolio
            </div>
          </div>

          {/* 하단 내비게이션 */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">
                © 2025 이준수 Portfolio. All rights reserved.
              </p>

              <nav
                className="flex space-x-6"
                aria-label="푸터 내비게이션"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
