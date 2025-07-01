"use client"

import { CustomIcon } from "./ui/icon-container"
import { IconContainer } from "./ui/icon-container"

export default function CateringMenuSection() {
  const handleOpenMenu = () => {
    window.open("/menu/CateringMenu.pdf", "_blank")
  }

  return (
    <section id="angebote" className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <IconContainer size="xl" variant="primary" className="bg-primary/15 border border-primary/20">
              <CustomIcon name="catering" size={48} />
            </IconContainer>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Catering Menu</h2>

          <button
            onClick={handleOpenMenu}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-md transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            Menu öffnen (PDF)
          </button>
        </div>

        <div className="text-center mt-12 bg-secondary/50 p-8 rounded-lg border border-border">
          <p className="text-foreground mb-2">Haben Sie spezielle Wünsche oder Anfragen? Kontaktieren Sie uns!</p>
          <a
            href="#booking"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-6 rounded-md transition-colors"
          >
            Anfrage stellen
          </a>
        </div>
      </div>
    </section>
  )
}
