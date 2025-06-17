import Link from "next/link"
import { XIcon } from "lucide-react"

export default function DatenschutzPage() {
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
      <h1 className="text-4xl font-bold mb-8 pt-10 text-center font-serif text-gray-800">Datenschutzerklärung</h1>

      <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
        <p className="mb-6">
          <strong>Wichtiger Hinweis:</strong> Dies ist ein Platzhaltertext. Bitte ersetzen Sie diesen Inhalt durch Ihre
          vollständige und rechtlich korrekte Datenschutzerklärung. Es wird dringend empfohlen, hierfür juristische
          Beratung in Anspruch zu nehmen oder einen Datenschutzgenerator zu verwenden.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
          diesem Text aufgeführten Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Datenerfassung auf unserer Website</h3>
        <p>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website
          erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>
        <p>
          Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
          Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden
          automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
          Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie unsere Website betreten.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
          2. Allgemeine Hinweise und Pflichtinformationen
        </h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
          erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
      </div>
    </div>
  )
}
