import { Card, CardContent } from "@/components/ui/card"
import { IconContainer } from "@/components/ui/icon-container"

export default function DesignColorSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-primary/5 to-coffee-100/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <IconContainer size="lg" variant="primary" className="mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
          </IconContainer>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Design & Farbe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Einer unserer unserer wichtigsten Aspekte: Wir arbeiten passend zu Ihrem Farbkonzept und kreieren
            einzigartige Motto-Buffets für Ihre Veranstaltung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="border-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <IconContainer size="sm" variant="primary" className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </IconContainer>
                <h4 className="font-medium">Farbabstimmung</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Getränke, Fingerfoods und Dekoration werden farblich perfekt auf Ihr Konzept abgestimmt.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <IconContainer size="sm" variant="primary" className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </IconContainer>
                <h4 className="font-medium">Motto-Buffets</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Thematische Buffets mit passenden Ballons, Blumen und Details nach Ihren Wünschen.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-primary/20 max-w-3xl mx-auto">
          <h3 className="text-xl mb-3">Ihre Vision, unser Design</h3>
          <p className="text-muted-foreground mb-4">
            Egal ob Hochzeit, Firmenfeier oder Geburtstag - wir setzen Ihre Farbwünsche und Motto-Ideen kreativ um. Von
            der Tischdekoration über die Speisenpräsentation bis hin zu den Getränken wird alles harmonisch aufeinander
            abgestimmt.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🌸 Echte Blumen</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🎈 Thematische Ballons</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🕯️ Passende Kerzen</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🍽️ Farbige Speisen</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🥤 Abgestimmte Getränke</span>
          </div>
        </div>
      </div>
    </section>
  )
}
