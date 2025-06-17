"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconContainer } from "@/components/ui/icon-container"

export default function CafeHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/AuszeitMainLogo.png"
              alt="Auszeit Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex space-x-6 text-lg">
            <a href="#menu" className="hover:text-primary transition-colors">
              Speisekarte
            </a>
            <a href="#hours" className="hover:text-primary transition-colors">
              Öffnungszeiten
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Kontakt
            </a>
            <Link href="/" className="hover:text-primary transition-colors flex items-center">
              <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </IconContainer>
              Startseite
            </Link>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-full max-w-xs bg-white p-4 pt-20 shadow-lg transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col space-y-6 text-center text-xl">
            <a
              href="#menu"
              className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speisekarte
            </a>
            <a
              href="#hours"
              className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Öffnungszeiten
            </a>
            <a
              href="#contact"
              className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <Link
              href="/"
              className="py-3 border-b border-gray-100 hover:text-primary transition-colors flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </IconContainer>
              Startseite
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
