import { CustomIcon, IconContainer } from "@/components/ui/icon-container"
import CafeSlideshow from "./slideshow"

export default function CafeAboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Slideshow and Welcome Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              Unser Café ist ein Ort zum Wohlfühlen – eine kleine Auszeit vom Alltag. In entspannter, liebevoll
              gestalteter Atmosphäre verwöhnen wir Sie mit frisch gebrühten Kaffeespezialitäten, hausgemachten Kuchen
              und ausgesuchten Köstlichkeiten.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify">
              Ob zum Frühstück, beim genussvollen Brunch oder beim gemütlichen Nachmittagskaffee – bei uns finden Sie zu
              jeder Tageszeit genau das Richtige.
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
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-6 font-madelyn text-2xl text-foreground">
              <span>Bio-Qualität</span>
              <span>Regional</span>
              <span>Hausgemacht</span>
              <span>Vegan-freundlich</span>
              <span>Vegetarisch</span>
              <span>Brunch</span>
              <span>Frühstück</span>
              <span>Barista</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
