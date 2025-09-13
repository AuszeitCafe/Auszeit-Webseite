import Link from "next/link"
import { XIcon } from "lucide-react"

export default function ImpressumPage() {
  const companyName = "Auszeit GbR"
  const partners = "Gesellschafter: Gülsüm Er, Maha Alrifai"
  const addressStreet = "Petersilienstrasse 33-35a"
  const addressCity = "38640 Goslar"
  const email = "Auszeit.goslar@gmail.com"
  const phoneNumber = "015126897148"
  const representatives = "Vertretungsberechtigt: Gülsüm Er, Maha Alrifai"
  const vatId = "DE453733748"
  const supervisoryAuthority = "Zuständige Aufsichtsbehörde: Ordnungsamt/Gesundheitsamt Goslar"

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
      <h1 className="text-4xl font-bold mb-8 pt-10 text-center font-serif text-gray-800">Impressum</h1>

      <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Angaben gemäß § 5 TMG</h2>
        <p>{companyName}</p>
        <p>{partners}</p>
        <p>{addressStreet}</p>
        <p>{addressCity}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Vertreten durch:</h2>
        <p>{representatives}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Kontakt:</h2>
        <p>Telefon: {phoneNumber}</p>
        <p>E-Mail: {email}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Umsatzsteuer-ID:</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
        <p>{vatId}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Zuständige Aufsichtsbehörde</h2>
        <p>{supervisoryAuthority}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </div>
    </div>
  )
}