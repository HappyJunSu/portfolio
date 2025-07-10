import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "이준수 portfolio",
  description: "웹 개발, 게임 개발에 열정을 가진 개발자 이준수의 포트폴리오입니다.",
  openGraph: {
    title: "이준수 portfolio",
    description: "웹 개발, 게임 개발에 열정을 가진 개발자 이준수의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio-one-delta-ui6gouh6fo.vercel.app/",
    siteName: "이준수 Portfolio",
    images: [
      {
        url: "https://portfolio-one-delta-ui6gouh6fo.vercel.app/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "이준수 Portfolio 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이준수 portfolio",
    description: "웹 개발, 게임 개발에 열정을 가진 개발자 이준수의 포트폴리오입니다.",
    images: ["https://portfolio-one-delta-ui6gouh6fo.vercel.app/images/og/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
