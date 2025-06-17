"use client"

import { CustomIcon } from "./ui/icon-container"
import { IconContainer } from "./ui/icon-container"

export default function CateringMenuSection() {
  const scrollbarStyles = `
    .catering-menu-scroll::-webkit-scrollbar {
      width: 12px;
      display: block !important;
    }
    .catering-menu-scroll::-webkit-scrollbar-track {
      background: hsl(var(--muted));
      border-radius: 6px;
      display: block !important;
    }
    .catering-menu-scroll::-webkit-scrollbar-thumb {
      background: hsl(var(--primary));
      border-radius: 6px;
      opacity: 1 !important;
      display: block !important;
      visibility: visible !important;
    }
    .catering-menu-scroll::-webkit-scrollbar-thumb:hover {
      background: hsl(var(--primary) / 0.8);
    }
    .catering-menu-scroll {
      scrollbar-width: thick !important; /* For Firefox */
      overflow-y: scroll !important;
    }
    /* Ensure scrollbar doesn't auto-hide on WebKit (macOS Safari/Chrome) */
    .catering-menu-scroll::-webkit-scrollbar {
      -webkit-appearance: none !important;
    }
  `

  return (
    <section id="angebote" className="w-full py-16 bg-background">
      <style jsx global>
        {scrollbarStyles}
      </style>{" "}
      {/* Apply styles globally for this component */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center mb-10">
          <div className="mb-4">
            <IconContainer size="xl" variant="primary" className="bg-primary/15 border border-primary/20">
              <CustomIcon name="catering" size={48} />
            </IconContainer>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Catering-Angebote</h2>
          <p className="text-center text-muted-foreground max-w-2xl">
            Wir bieten eine Vielzahl von Optionen für Ihr Event - von süßen und deftigen Speisen bis hin zu
            erfrischenden Getränken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Getränke Column */}
          <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
            <div className="bg-primary/5 p-4 border-b border-border">
              <h3 className="text-xl text-primary">Getränke</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-2 text-foreground">
                <li className="py-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                  Limonade Minze
                </li>
                <li className="py-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                  Limonade Erdbeere
                </li>
                <li className="py-1 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                  Limonade Zitrone
                </li>
                <li className="pt-6 pb-2 font-medium text-primary/90 border-t border-border mt-4">
                  Buffet nach Farben und Motto
                </li>
              </ul>
            </div>
          </div>

          {/* Süß Column */}
          <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
            <div className="bg-primary/5 p-4 border-b border-border">
              <h3 className="text-xl text-primary">Süß</h3>
            </div>
            <div
              className="catering-menu-scroll p-6 max-h-[500px]" // overflow-y-scroll is now in CSS
              style={
                {
                  // scrollbarWidth and scrollbarColor are for Firefox, handled by CSS now
                  // scrollbarGutter: "stable", // This can also be in CSS if preferred
                }
              }
            >
              <ul className="space-y-2 text-foreground">
                {[
                  "Melonen Platte",
                  "Obstplatte",
                  "Obstsalat",
                  "Melonen-Käse Platte",
                  "Dubai-Schoko Tiramisu im Glas",
                  "Raffaello Creme im Glas",
                  "Obst tartlettes",
                  "Lotus im Glas",
                  "Tiramisu im Glas",
                  "Mini Donuts",
                  "Muffins",
                  "Mini pancakes",
                  "Schoko Pudding",
                  "Erdbeer Pudding",
                  "Schoko mouse",
                  "Milchreis",
                  "Panna Cotta mit Erdbeeren",
                  "Mini Bowl mit chiasamen",
                  "Cake Pops",
                  "Bueno Törtchen",
                  "Lotus Törtchen",
                  "Mini Waffeln",
                  "Cheesecake",
                  "Brownis",
                  "Mini Eclairs",
                  "Creme brûlée im Schälchen",
                ].map((item, index) => (
                  <li key={index} className="py-1 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                    {item}
                  </li>
                ))}
                <li className="py-2 flex items-center text-primary/70 italic">
                  <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                  ... und vieles mehr
                </li>
              </ul>
            </div>
          </div>

          {/* Deftig Column */}
          <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
            <div className="bg-primary/5 p-4 border-b border-border">
              <h3 className="text-xl text-primary">Deftig</h3>
            </div>
            <div
              className="catering-menu-scroll p-6 max-h-[500px]" // overflow-y-scroll is now in CSS
              style={
                {
                  // scrollbarGutter: "stable",
                }
              }
            >
              <ul className="space-y-2 text-foreground">
                {[
                  "Mini veggie burger",
                  "Mini Burger",
                  "Bulgur Salat",
                  "Nudel Salat",
                  "Gemischter salat",
                  "Kartoffelsalat",
                  "Garnelen auf Soße",
                  "Cig köfte",
                  "Bruschetta",
                  "Zigarren börek",
                  "Käseplatte",
                  "Lachs canepe",
                  "Champion canepe",
                  "Avocado canepe",
                  "Icli köfte",
                  "Schinken (Rind) canepe",
                  "Crispy Garnelen",
                  "Tomate-Mozzarella Spieß",
                  "Käsespieß",
                  "Crostini mit Ziegenkäse und Honig",
                  "Mini Pizza",
                  "Mini wrap Hähnchen",
                  "Mini wrap vegan",
                  "Tomate, Mozzarella Brötchen",
                  "Mini Sandwich mix",
                  "Gemüse Sticks",
                  "Garnelen Spieß",
                  "Toast Röllchen (Ofen) falafel",
                  "Brotkorb",
                ].map((item, index) => (
                  <li key={index} className="py-1 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                    {item}
                  </li>
                ))}
                <li className="py-2 flex items-center text-primary/70 italic">
                  <span className="w-2 h-2 rounded-full bg-primary/40 mr-2"></span>
                  ... und vieles mehr
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-secondary/50 p-8 rounded-lg border border-border">
          <p className="text-foreground mb-2">Haben Sie spezielle Wünsche oder Anfragen? Kontaktieren Sie uns!</p>
          <p className="text-sm text-muted-foreground mb-4">
            💡 Tipp: Scrollen Sie in den Listen oben, um alle verfügbaren Optionen zu sehen.
          </p>
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
