import Link from "next/link"
import { XIcon } from "lucide-react"

export default function DatenschutzPage() {
  const companyName = "Auszeit GbR"
  const addressStreet = "Petersilienstrasse 33-35a"
  const addressCity = "38640 Goslar"
  const email = "Auszeit.goslar@gmail.com"
  const phone = "05321 7387918"
  const representatives = "Gülsüm Er, Maha Alrifai"
  const lastUpdated = "13.09.2025"

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

      <h1 className="text-4xl font-bold mb-2 pt-10 text-center font-serif text-gray-800">
        Datenschutzerklärung
      </h1>
      <p className="text-center text-sm text-gray-500 mb-8">Stand: {lastUpdated}</p>

      <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
        {/* 1. Datenschutz auf einen Blick */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
          wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich?</strong> Verantwortlich für die Datenverarbeitung auf dieser Website ist der
          im Abschnitt „Verantwortlicher“ genannte Betreiber.
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong> Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen (z.&nbsp;B. per E-Mail, Telefon oder über ein Kontaktformular). Weitere Daten werden
          automatisch durch unsere IT-Systeme bzw. den Hosting-Anbieter beim Besuch der Website erfasst (z.&nbsp;B.
          IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Ressource, User-Agent). Die Erfassung dieser Daten
          erfolgt automatisch, sobald Sie unsere Website aufrufen.
        </p>
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong> Ein Teil der Daten wird erhoben, um eine fehlerfreie
          Bereitstellung der Website zu gewährleisten. Andere Daten können zur Bearbeitung Ihrer Anfragen genutzt werden.
        </p>
        <p>
          <strong>Welche Rechte haben Sie?</strong> Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
          Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem steht Ihnen das Recht
          zu, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen und sich bei einer
          Datenschutz-Aufsichtsbehörde zu beschweren.
        </p>

        {/* 2. Verantwortlicher */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. Verantwortlicher</h2>
        <p>
          <strong>{companyName}</strong><br />
          Gesellschafter (vertretungsberechtigt): {representatives}<br />
          {addressStreet}<br />
          {addressCity}<br />
          Telefon: {phone}<br />
          E-Mail: {email}
        </p>

        {/* 3. Rechtsgrundlagen */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
          3. Rechtsgrundlagen der Verarbeitung
        </h2>
        <p>
          Wir verarbeiten personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags
          oder vorvertraglicher Maßnahmen, z.&nbsp;B. Beantwortung konkreter Anfragen), Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der sicheren, stabilen und effizienten Bereitstellung der Website sowie an der
          Bearbeitung allgemeiner Anfragen) und – soweit erforderlich – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
          Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.
        </p>

        {/* 4. Hosting & Server-Logs */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">4. Hosting & Server-Log-Dateien</h2>
        <p>
          Unsere Website wird bei einem externen Dienstleister gehostet. Die Nutzung des Hostings erfolgt zum Zwecke
          der sicheren und effizienten Bereitstellung unseres Online-Angebots (berechtigtes Interesse i.S.d.
          Art. 6 Abs. 1 lit. f DSGVO). Der Hosting-Anbieter verarbeitet in unserem Auftrag Bestands-, Kontakt-,
          Inhalts-, Vertrags-, Nutzungs-, Meta- und Kommunikationsdaten.
        </p>
        <p>
          Bei jedem Zugriff auf die Website werden sogenannte Server-Log-Dateien erfasst: IP-Adresse, Datum und Uhrzeit
          des Abrufs, Zeitzonendifferenz zur GMT, Inhalt der Anforderung (konkrete Seite), HTTP-Statuscode, jeweils
          übertragene Datenmenge, Referrer-URL, Browsertyp/-version, Betriebssystem und dessen Oberfläche, Sprache.
          Die Speicherung erfolgt zur Gewährleistung der Funktionsfähigkeit und Sicherheit der Website sowie zur
          Fehleranalyse. Log-Daten werden in der Regel nach spätestens 30 Tagen gelöscht, sofern keine längere
          Aufbewahrung zu Beweiszwecken erforderlich ist.
        </p>

        {/* 5. Kontaktaufnahme */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">5. Kontakt per E-Mail oder Telefon</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben inklusive der von Ihnen übermittelten
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
          beruht die Verarbeitung auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO) an der effektiven
          Bearbeitung der an uns gerichteten Anfragen.
        </p>
        <p>
          Wir löschen diese Anfragen, sobald sie nicht mehr erforderlich sind, spätestens jedoch nach 12&nbsp;Monaten,
          sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        {/* 6. Kontaktformular (falls vorhanden) */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">6. Kontaktformular</h2>
        <p>
          Sofern unsere Website ein Kontaktformular bereitstellt, werden die dort eingegebenen Daten (z.&nbsp;B. Name,
          E-Mail-Adresse, Telefonnummer, Nachricht) ausschließlich zur Bearbeitung Ihres Anliegens verarbeitet. Pflichtfelder
          sind entsprechend gekennzeichnet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder – bei allgemeinen
          Anfragen – Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
          ist, spätestens nach 12&nbsp;Monaten, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>

        {/* 7. Cookies */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">7. Cookies</h2>
        <p>
          Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb und die
          Bereitstellung bestimmter Funktionen erforderlich sind (z.&nbsp;B. Session-Cookies). Die Rechtsgrundlage ist
          § 25 Abs. 2 Nr. 2 TTDSG i.V.m. Art. 6 Abs. 1 lit. f DSGVO. Tracking- oder Analyse-Cookies kommen nicht zum
          Einsatz. Browser können so konfiguriert werden, dass Sie über das Setzen von Cookies informiert werden und
          Cookies nur im Einzelfall erlauben, die Annahme für bestimmte Fälle oder generell ausschließen sowie das
          automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
          kann die Funktionalität dieser Website eingeschränkt sein.
        </p>

        {/* 8. Weitergabe an Auftragsverarbeiter / Dritte */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
          8. Weitergabe von Daten & Auftragsverarbeitung
        </h2>
        <p>
          Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung
          erforderlich ist, wir gesetzlich dazu verpflichtet sind, Sie eingewilligt haben oder im Rahmen der
          Auftragsverarbeitung. Mit Dienstleistern schließen wir Verträge über Auftragsverarbeitung gemäß Art. 28 DSGVO.
        </p>

        {/* 9. Speicherdauer */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">9. Speicherdauer</h2>
        <p>
          Soweit in dieser Erklärung keine speziellere Speicherdauer genannt wurde, verbleiben personenbezogene Daten
          bei uns, bis der Zweck der Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
          oder eine Einwilligung widerrufen, werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
          (z.&nbsp;B. handels-/steuerrechtliche Pflichten) entgegenstehen.
        </p>

        {/* 10. Ihre Rechte */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">10. Ihre Rechte</h2>
        <ul>
          <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
          <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
          <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
          <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
          <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
          <li>
            <strong>Widerspruch</strong> (Art. 21 DSGVO) gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. e oder lit. f
            DSGVO beruhen; dies gilt insbesondere für eine Verarbeitung zu Direktwerbezwecken.
          </li>
          <li>
            <strong>Widerruf von Einwilligungen</strong> (Art. 7 Abs. 3 DSGVO) mit Wirkung für die Zukunft.
          </li>
          <li>
            <strong>Beschwerde bei einer Aufsichtsbehörde</strong> (Art. 77 DSGVO). Zuständig ist die
            Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsortes, Ihres Arbeitsplatzes oder des Ortes des
            mutmaßlichen Verstoßes.
          </li>
        </ul>

        {/* 11. Datensicherheit */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">11. Datensicherheit</h2>
        <p>
          Diese Website nutzt Transportverschlüsselung (TLS/SSL). Eine verschlüsselte Verbindung erkennen Sie u.&nbsp;a.
          an der Adresszeile des Browsers (&quot;https://&quot;).
        </p>

        {/* 12. Änderungen */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">12. Änderungen dieser Erklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
          Anforderungen entspricht oder Änderungen unserer Leistungen in der Erklärung umzusetzen. Es gilt die jeweils
          auf dieser Seite veröffentlichte Fassung.
        </p>

        {/* 13. Kontakt zur Datenschutz-Anfrage */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">13. Ansprechpartner für Datenschutz</h2>
        <p>
          Für Auskünfte, Anträge oder Beschwerden zum Datenschutz wenden Sie sich bitte an:<br />
          <strong>{companyName}</strong><br />
          {addressStreet}, {addressCity}<br />
          Telefon: {phone} · E-Mail: {email}
        </p>
      </div>
    </div>
  )
}