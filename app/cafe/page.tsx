import CafeHeader from "@/components/cafe-header"
import CafeHeroSection from "@/components/cafe/hero-section"
import CafeAboutSection from "@/components/cafe/about-section"
import PdfMenuLinkSection from "@/components/cafe/pdf-menu-link-section" // Import new component
import CafeHoursLocationSection from "@/components/cafe/hours-location-section"
import Footer from "@/components/footer"

export default function CafePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <CafeHeader />
      <CafeHeroSection />
      <CafeAboutSection />
      <PdfMenuLinkSection /> {/* Use new component */}
      <CafeHoursLocationSection />
      <Footer />
    </main>
  )
}
