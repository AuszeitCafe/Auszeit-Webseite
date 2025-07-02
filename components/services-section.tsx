import { CustomIcon, IconContainer } from "@/components/ui/icon-container"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <IconContainer size="lg" variant="primary" className="mx-auto mb-4">
            <CustomIcon name="service" size={40} />
          </IconContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unsere Catering-Leistungen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten maßgeschneiderte Catering-Lösungen für jeden Anlass - von kleinen privaten Feiern bis hin zu
            großen Firmenveranstaltungen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center font-madelyn text-2xl text-foreground">
          <div>Vielfaeltiges Angebot</div>
          <div>Flexible Planung</div>
          <div>Hoechste Qualität</div>
          <div>Farbabstimmung</div>
          <div>Mottobuffets</div>
        </div>
      </div>
    </section>
  )
}
