"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function FerienwohnungPage() {
  const mailto = "mailto:fw.auszeit.goslar@gmail.com?subject=Anfrage%20Ferienwohnung%20Auszeit"

  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/AuszeitMainLogo.png" alt="Auszeit Logo" width={140} height={70} className="h-auto" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-coffee-700 hover:text-coffee-900 font-semibold transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 12L12 3l9 9" />
              <path d="M9 21V12h6v9" />
            </svg>
            <span>Startseite</span>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f1eb] to-[#ede6db]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HintergrundHomepage-idrKBi7EVAbTa9tugQX9DlXZXaEMQS.png)`,
            backgroundSize: "420px",
            backgroundRepeat: "repeat",
            opacity: 0.28,
            filter: "contrast(1.05) brightness(0.95)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-cream/60 to-beige-200/50" />

        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              Ferienwohnung Auszeit
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-aspal-heading font-bold text-gray-900 leading-tight">
              Auszeit Ferienwohnung – Ankommen. Durchatmen. Bleiben.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              Mitten in der historischen Altstadt von Goslar, direkt über unserem Café Auszeit, erwartet euch ein Ort zum
              Zurücklehnen und Wohlfühlen. Unsere moderne Zweizimmer-Ferienwohnung ist der perfekte Rückzugsort für
              alle, die Stadtleben, Gemütlichkeit und eine kleine Auszeit vom Alltag verbinden möchten.
            </p>
            <p className="mt-4 text-base md:text-lg text-coffee-700 font-semibold">
              Ab Februar öffnen wir unsere Türen – und freuen uns darauf, euch willkommen zu heißen.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-coffee-600 hover:from-coffee-600 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a href={mailto}>Anfragen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Wohnen mit Auszeit-Gefühl
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Auf 45 m² bietet die Wohnung alles, was ihr für einen entspannten Aufenthalt braucht. Ideal für 2-3
                Personen, mit Platz für eine dritte Person. Modern, ruhig gelegen und doch mitten im Geschehen.
              </p>
              <div className="rounded-2xl bg-white/85 p-6 shadow-lg border border-primary/10">
                <ul className="space-y-3 text-gray-800">
                  <li>🛏 Separates Schlafzimmer für erholsamen Schlaf</li>
                  <li>🛋 Wohnbereich mit Schlafcouch (für eine weitere Person)</li>
                  <li>📚 Kleine Leseecke zum Abschalten</li>
                  <li>📺 Fernseher &amp; kostenloses WLAN</li>
                  <li>☕ Wasserkocher, gratis Tee &amp; löslicher Kaffee</li>
                  <li>🧼 Modernes, stilvolles Ambiente</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white/90 p-6 shadow-lg border border-primary/10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Zentrale Lage – mitten in Goslar</h3>
                <p className="text-gray-800">
                  📍 Petersilienstraße 33–35 A, 38640 Goslar
                  <br />
                  Ihr wohnt direkt in der Altstadt – Cafés, Restaurants, Sehenswürdigkeiten und Einkaufsmöglichkeiten
                  sind nur wenige Schritte entfernt. Morgens ein Frühstück im Café Auszeit, tagsüber Goslar entdecken,
                  abends entspannt ankommen.
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-6 shadow-lg border border-primary/10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bequem &amp; unkompliziert</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>🚗 Eigener Parkplatz inklusive</li>
                  <li>🛗 3. Etage mit Aufzug</li>
                  <li>🔐 24/7 Check-in über sichere Schlüsselbox (ABUS)</li>
                  <li>🏡 Ruhig gelegen trotz zentraler Lage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cream to-beige-100">
        <div className="container mx-auto px-4 py-14 md:py-16">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/90 p-8 shadow-xl border border-primary/10 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Ab Februar für euch da</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Unsere Ferienwohnung startet ab Februar – wir freuen uns darauf, euch einen Ort zu bieten, an dem ihr euch
              sofort zuhause fühlt. Ob Kurztrip, Wochenende oder kleine Auszeit zwischendurch: Hier beginnt Entspannung
              über dem Café.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container mx-auto px-4 pb-20">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/95 p-8 shadow-lg border border-primary/10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Jetzt anfragen &amp; Auszeit sichern</h3>
            <p className="mt-3 text-gray-700">
              Unsere Ferienwohnung ist ab Februar buchbar.
              <br />
              Wir freuen uns auf eure Anfrage.
            </p>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-coffee-600 hover:from-coffee-600 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a href={mailto}>Anfragen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
