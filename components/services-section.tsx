import { Card, CardHeader, CardTitle } from "@/components/ui/card"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 text-center">
              <IconContainer size="md" variant="transparent" className="mb-4 mx-auto">
                <CustomIcon name="catering" size={48} />
              </IconContainer>
              <CardTitle className="text-lg">Vielfältiges Angebot</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 text-center">
              <IconContainer size="md" variant="transparent" className="mb-4 mx-auto">
                <CustomIcon name="service" size={48} />
              </IconContainer>
              <CardTitle className="text-lg">Flexible Planung</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 text-center">
              <IconContainer size="md" variant="transparent" className="mb-4 mx-auto">
                <CustomIcon name="service" size={48} />
              </IconContainer>
              <CardTitle className="text-lg">Höchste Qualität</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 text-center">
              <IconContainer size="md" variant="transparent" className="mb-4 mx-auto">
                <CustomIcon name="service" size={48} />
              </IconContainer>
              <CardTitle className="text-lg">Farbabstimmung</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 text-center">
              <IconContainer size="md" variant="transparent" className="mb-4 mx-auto">
                <CustomIcon name="service" size={48} />
              </IconContainer>
              <CardTitle className="text-lg">Mottobuffets</CardTitle>
            </CardHeader>
          </Card>
        </div>

      </div>
    </section>
  )
}
