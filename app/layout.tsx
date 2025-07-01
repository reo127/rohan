import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Rohan Malo - Full Stack Developer & Designer",
  description:
    "Portfolio of Rohan Malo, a passionate full stack developer and designer creating exceptional digital experiences.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
