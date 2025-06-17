import Link from "next/link"
import { XIcon } from "lucide-react"

export default function AgbPage() {
  return (
    <div className="relative container mx-auto px-4 py-12 min-h-screen">
      <Link
        href="/"
        passHref
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
        aria-label="Zurück zur Startseite"
      >
        <XIcon size={28} />
      </Link>
      <h1 className="text-4xl font-bold mb-8 pt-10 text-center font-serif text-gray-800">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
        <p className="mb-6">
          <strong>Wichtiger Hinweis:</strong> Dies ist ein Platzhaltertext. Bitte ersetzen Sie diesen Inhalt durch Ihre
          vollständigen und rechtlich korrekten Allgemeinen Geschäftsbedingungen. Es wird dringend empfohlen, hierfür
          juristische Beratung in Anspruch zu nehmen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. Geltungsbereich</h2>
        <p>
          Für alle Bestellungen und Dienstleistungen über unsere Webseite durch Verbraucher und Unternehmer gelten die
          nachfolgenden AGB.
        </p>
        <p>
          Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder
          ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist
          eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines
          Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.
        </p>
        <p>
          Gegenüber Unternehmern gelten diese AGB auch für künftige Geschäftsbeziehungen, ohne dass wir nochmals auf sie
          hinweisen müssten. Verwendet der Unternehmer entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen,
          wird deren Geltung hiermit widersprochen; sie werden nur dann Vertragsbestandteil, wenn wir dem ausdrücklich
          zugestimmt haben.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. Vertragspartner, Vertragsschluss</h2>
        <p>Der Kaufvertrag/Dienstleistungsvertrag kommt zustande mit [Ihr Unternehmensname].</p>
        <p>
          [Beschreiben Sie hier den Prozess des Vertragsschlusses, z.B. wie Angebote gemacht werden, wie Bestellungen
          bestätigt werden etc.]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. Vertragssprache, Vertragstextspeicherung</h2>
        <p>Die für den Vertragsschluss zur Verfügung stehende Sprache ist Deutsch.</p>
        <p>
          Wir speichern den Vertragstext und senden Ihnen die Bestelldaten und unsere AGB per E-Mail zu. Den
          Vertragstext können Sie in unserem Kunden-Login einsehen, sofern vorhanden.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">4. Schlussbestimmungen</h2>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen
          Bestimmungen unberührt.
        </p>
      </div>
    </div>
  )
}
