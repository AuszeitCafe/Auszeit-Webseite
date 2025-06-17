"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconContainer } from "@/components/ui/icon-container"

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToBooking = () => {
    setMobileMenuOpen(false)
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    setMobileMenuOpen(false)
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative w-full">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md" : ""}`}>
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
            <div className="hidden md:flex space-x-6 text-lg mr-6">
              <a
                href="#services"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("services")
                }}
              >
                Leistungen
              </a>
              <a
                href="#angebote"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("angebote")
                }}
              >
                Angebote
              </a>
              <a
                href="#gallery"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("gallery")
                }}
              >
                Galerie
              </a>
              <a
                href="#booking"
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("booking")
                }}
              >
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
            <Button className="hidden md:block" onClick={scrollToBooking}>
              Jetzt Buchen
            </Button>
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
                href="#services"
                className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("services")
                  setMobileMenuOpen(false)
                }}
              >
                Leistungen
              </a>
              <a
                href="#angebote"
                className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("angebote")
                  setMobileMenuOpen(false)
                }}
              >
                Angebote
              </a>
              <a
                href="#gallery"
                className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("gallery")
                  setMobileMenuOpen(false)
                }}
              >
                Galerie
              </a>
              <a
                href="#booking"
                className="py-3 border-b border-gray-100 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("booking")
                  setMobileMenuOpen(false)
                }}
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
              <Button className="mt-4" onClick={scrollToBooking}>
                Jetzt Buchen
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative h-screen w-full flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auszeitbanner1-VIqwXmjhagEjXg8MUtFvHkvHc8s5qM.png"
          alt="Auszeit Café Interior"
          fill
          className="object-cover object-center z-0"
          priority
        />

        <div className="container mx-auto px-4 z-20 text-center pt-16 md:pt-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <Image
                  src="/images/AuszeitMainLogo.png"
                  alt="Auszeit Logo"
                  width={280}
                  height={140}
                  className="h-16 md:h-24 lg:h-28 w-auto filter brightness-0 invert -mt-10 md:-mt-14 lg:-mt-16"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                  priority
                />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-aspal-title uppercase tracking-wide leading-none">
                  Catering
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl mb-6 text-white/90">Exquisites Catering für Ihren besonderen Anlass</p>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Genießen Sie kulinarische Köstlichkeiten, die Ihre Gäste begeistern werden
            </p>
            <div className="flex justify-center">
              {/* Updated button with more elegant, transparent styling */}
              <button
                onClick={scrollToBooking}
                className="text-lg px-10 py-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white rounded-md 
                hover:bg-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 
                shadow-lg hover:shadow-xl font-medium tracking-wide"
              >
                Jetzt Anfragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
