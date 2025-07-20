import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Rohan Malo - Full Stack Developer & Designer",
  description:
    "Rohan Malo - Self-taught Full-Stack Developer specializing in Next.js, React, Node.js & MongoDB. Building LIMS, LMS platforms & modern web applications. Available for software engineering roles & freelance projects",
  generator: 'v0.dev',
  keywords: [
    "rohanmalo",
    "Rohan Malo",
    "full stack developer",
    "mern",
    "nextjs",
    "react"
  ]
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
