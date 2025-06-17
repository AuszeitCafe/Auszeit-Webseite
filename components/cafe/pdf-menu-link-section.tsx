import { Button } from "@/components/ui/button"
import { CustomIcon, IconContainer } from "@/components/ui/icon-container"
import { ExternalLink } from "lucide-react"

export default function PdfMenuLinkSection() {
  return (
    <section id="menu" className="py-16 bg-gradient-to-br from-beige-50 to-coffee-100/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <IconContainer size="xl" variant="coffee" className="mx-auto mb-6 shadow-md border border-coffee-200/50">
            <CustomIcon name="cafe" size={50} />
          </IconContainer>
          {/* Removed font-aspal-title from h2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Speisekarte</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältige Auswahl an Speisen und Getränken. Klicken Sie auf den Button, um unsere
            aktuelle Speisekarte als PDF anzusehen oder herunterzuladen.
          </p>
        </div>

        <div className="max-w-md mx-auto text-center bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-primary/20">
          <Button
            asChild
            size="lg"
            className="w-full text-lg px-8 py-6 btn-primary-gradient shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
          >
            {/* 
            WICHTIG: Stellen Sie sicher, dass die PDF-Datei genau unter diesem Pfad im 'public' Ordner liegt:
            public/menu/Auszeit_Cafe_Speisekarte.pdf 
            Groß- und Kleinschreibung ist wichtig!
          */}
            <a
              href="/menu/Auszeit_Cafe_Speisekarte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <IconContainer
                size="sm"
                variant="transparent"
                className="!w-7 !h-7 !p-0 mr-3 text-primary-foreground group-hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </IconContainer>
              Speisekarte ansehen
              <ExternalLink className="ml-2 h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            Unsere Speisekarte wird regelmäßig aktualisiert und liebevoll für Sie zusammengestellt. Änderungen und
            saisonale Anpassungen sind vorbehalten.
          </p>
        </div>
      </div>
    </section>
  )
}
