import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CateringMenuSection from "@/components/catering-menu-section"
import DesignColorSection from "@/components/design-color-section"
import GallerySection from "@/components/gallery-section"
// import PricingSection from "@/components/pricing-section" // Commented out for now
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"
import { BookingProvider } from "@/contexts/booking-context"

export default function Home() {
  return (
    <BookingProvider>
      <main className="flex min-h-screen flex-col w-full">
        <HeroSection />
        <ServicesSection />
        <CateringMenuSection />
        <DesignColorSection />
        <GallerySection />
        {/* <PricingSection /> */}
        <BookingSection />
        <Footer />
      </main>
    </BookingProvider>
  )
}
