"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-dark dark:bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white dark:text-dark font-bold text-sm">RM</span>
            </div>
            <span className="text-2xl font-bold text-dark dark:text-white">Rohan Malo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark dark:text-white hover:text-dark/70 dark:hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <a href="/rohanmalo.pdf"download="rohanmalo">
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-primary text-dark hover:bg-primary/90 border border-dark dark:border-primary rounded-xl px-6">
              Download Resume
            </Button>
          </div>
          </a>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-dark dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-dark dark:text-white hover:text-dark/70 dark:hover:text-white/70"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <ThemeToggle />
                <Button className="bg-primary text-dark hover:bg-primary/90 border border-dark dark:border-primary rounded-xl px-4">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
