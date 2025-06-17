import Image from "next/image"
import Link from "next/link"
import { IconContainer } from "@/components/ui/icon-container"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/AuszeitMainLogo.png"
                alt="Auszeit Logo"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
            </div>
            {/* Removed the requested text */}
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5 flex-shrink-0">
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
                    className="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </IconContainer>
                <span className="text-muted-foreground">
                  <strong>Cafe & Catering</strong>
                  <br />
                  Petersilienstrasse 33-35a
                  <br />
                  38640 Goslar
                </span>
              </li>
              <li className="flex items-center mt-3">
                <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 flex-shrink-0">
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
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </IconContainer>
                <span className="text-muted-foreground">auszeit.goslar@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social and Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/cafe_auszeit_goslar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
              >
                <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </IconContainer>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@cafe_auszeit_goslar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
              >
                <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0">
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
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M15 8v8a4 4 0 0 1-4 4" />
                    <line x1="15" y1="4" x2="15" y2="12" />
                  </svg>
                </IconContainer>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Öffnungszeiten Cafe:
              <br />
              Mo-Di-Mi & Do: 09:00 - 17:00 Uhr
              <br />
              Sa & So: 09:00 - 18:00 Uhr
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Auszeit Catering. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-primary transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
