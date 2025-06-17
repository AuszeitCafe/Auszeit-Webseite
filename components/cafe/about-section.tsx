import { CustomIcon, IconContainer } from "@/components/ui/icon-container"
import CafeSlideshow from "./slideshow"

export default function CafeAboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Slideshow and Welcome Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Unser Café ist ein Ort der Entspannung und des Genusses. In gemütlicher Atmosphäre servieren wir Ihnen
              hausgemachte Kuchen, frische Kaffeespezialitäten und kleine Köstlichkeiten.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Ob zum Frühstück, für eine Mittagspause oder zum Nachmittagskaffee – bei uns finden Sie zu jeder Tageszeit
              etwas Passendes.
            </p>
            <div className="flex items-center space-x-4">
              <IconContainer size="sm" variant="transparent" className="!w-6 !h-6 !p-0">
                <CustomIcon name="cafe" size={24} />
              </IconContainer>
              <span className="text-lg font-medium">Hausgemachte Spezialitäten</span>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <IconContainer size="sm" variant="transparent" className="!w-6 !h-6 !p-0">
                <CustomIcon name="service" size={24} />
              </IconContainer>
              <span className="text-lg font-medium">Frische Zutaten aus der Region</span>
            </div>
          </div>

          {/* Enhanced Single Slideshow */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-primary/10">
            <CafeSlideshow />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          {/* Removed Image component from here */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center md:text-left">
              Unsere Spezialitäten
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Wir legen großen Wert auf Qualität und Frische. Unsere Kuchen und Torten werden täglich frisch in unserer
              eigenen Konditorei zubereitet.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Unsere Kaffeebohnen werden sorgfältig ausgewählt und von erfahrenen Baristas zu köstlichen
              Kaffeespezialitäten verarbeitet. Genießen Sie die perfekte Auszeit bei uns!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center space-x-2">
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
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </IconContainer>
                <span className="text-sm font-medium">Bio-Qualität</span>
              </div>
              <div className="flex items-center space-x-2">
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
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </IconContainer>
                <span className="text-sm font-medium">Regional</span>
              </div>
              <div className="flex items-center space-x-2">
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
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </IconContainer>
                <span className="text-sm font-medium">Hausgemacht</span>
              </div>
              <div className="flex items-center space-x-2">
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
                    className="text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </IconContainer>
                <span className="text-sm font-medium">Vegan-freundlich</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
