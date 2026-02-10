import CafeHeader from "@/components/cafe-header"
import CafeHeroSection from "@/components/cafe/hero-section"
import CafeAboutSection from "@/components/cafe/about-section"
import PdfMenuLinkSection from "@/components/cafe/pdf-menu-link-section" 
import GallerySection from "@/components/cafe/gallery-section"
import Footer from "@/components/footer"

export default function CafePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <CafeHeader />
      <CafeHeroSection />
      <CafeAboutSection />
      <section aria-label="Auszeichnung" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg md:text-xl font-medium text-foreground mb-6">
              Auszeichnung für das Café Auszeit
            </p>
            <div className="flex justify-center">
              <a
                id="b-circledLeaves27"
                target="_blank"
                rel="noopener noreferrer"
                href="https://de.restaurantguru.com/Cafe-Auszeit-Goslar"
                className="b-circledLeaves27--light b-circledLeaves27--2025"
              >
                <span className="b-circledLeaves27__title">Empfohlen</span>
                <span className="b-circledLeaves27__separator"></span>
                <span className="b-circledLeaves27__name">Ćafe Auszeit</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <PdfMenuLinkSection /> {/* Use new component */}
      <GallerySection />
      <Footer />
    </main>
  )
}
