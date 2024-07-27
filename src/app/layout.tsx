import './globals.css'
import type { Metadata } from 'next'
import { SessionProvider } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[..nextauth]/route"

export const metadata: Metadata = {
  title: 'EBS 영단어 학습 앱',
  description: 'EBS 파이널 1200 영단어를 효과적으로 학습하세요',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">홈</a></li>
              <li><a href="/dashboard" className="hover:underline">대시보드</a></li>
              <li><a href="/study" className="hover:underline">학습</a></li>
              <li><a href="/statistics" className="hover:underline">통계</a></li>
            </ul>
          </nav>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}