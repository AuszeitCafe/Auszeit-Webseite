import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="pb-2">
              <IconContainer size="md" variant="transparent" className="mb-4">
                <CustomIcon name="catering" size={48} />
              </IconContainer>
              <CardTitle>Vielfältiges Angebot</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Von Fingerfood und Canapés bis hin zu mehrgängigen Menüs - wir bieten eine große Auswahl an
                kulinarischen Köstlichkeiten.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Removed "Für jede Gruppengröße" section */}
          {/*
        <Card className="border border-border/40 shadow-sm">
          <CardHeader className="pb-2">
            <IconContainer size="md" variant="transparent" className="mb-4">
              <CustomIcon name="service" size={48} />
            </IconContainer>
            <CardTitle>Für jede Gruppengröße</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Ob für 10 oder 200 Personen - wir passen unser Angebot flexibel an die Größe Ihrer Veranstaltung an.
            </CardDescription>
          </CardContent>
        </Card>
        */}

          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="pb-2">
              <IconContainer size="md" variant="transparent" className="mb-4">
                <CustomIcon name="service" size={48} />
              </IconContainer>
              <CardTitle>Flexible Planung</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Wir unterstützen Sie bei der Planung Ihrer Veranstaltung und passen uns Ihren zeitlichen Vorstellungen
                an.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border border-border/40 shadow-sm">
            <CardHeader className="pb-2">
              <IconContainer size="md" variant="transparent" className="mb-4">
                <CustomIcon name="service" size={48} />
              </IconContainer>
              <CardTitle>Höchste Qualität</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Wir verwenden nur frische, hochwertige Zutaten und legen größten Wert auf Qualität und Präsentation.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-accent rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <IconContainer size="md" variant="primary" className="mr-3">
                  <CustomIcon name="service" size={30} />
                </IconContainer>
                <h3 className="text-2xl font-bold">Unser Café für Ihre Veranstaltung</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Unser gemütliches Café steht Ihnen auch für private Veranstaltungen zur Verfügung. In stilvollem
                Ambiente können Sie mit Ihren Gästen feiern und unsere kulinarischen Köstlichkeiten genießen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Platz für bis zu 70 Personen
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Moderne Ausstattung und angenehme Atmosphäre
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Individuelle Dekoration nach Ihren Wünschen
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Flexible Bestuhlung je nach Veranstaltungsart
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Unsere Musikanlage steht für individuelle Veranstaltungen zur Verfügung.
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Wir organisieren echte Blumen passend zum Farbkonzept.
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Getränke und Fingerfoods können farblich auf das Konzept abgestimmt werden.
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Wir bieten farblich abgestimmte Buffet-Konzepte an – z. B. komplett in Orange, Blau, Pink oder Grün.
                </li>
                <li className="flex items-start">
                  <IconContainer size="sm" variant="transparent" className="!w-5 !h-5 !p-0 mr-2 mt-0.5">
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
                  Auch Motto-Buffets mit Ballons, Blumen oder anderen Details nach Wunsch sind möglich.
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auszeitbanner2-tx4XgTDDJ6oaYjIsBBiiv0PPf7U3II.png"
                alt="Auszeit Café Interior"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Add this hint section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground bg-secondary/30 inline-block px-4 py-2 rounded-lg">
            <strong>Hinweis:</strong> Catering bieten wir ab einer Personenanzahl von 25 an.
          </p>
        </div>
      </div>
    </section>
  )
}
