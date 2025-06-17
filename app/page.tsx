"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { CustomIcon, IconContainer } from "@/components/ui/icon-container"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const { toast } = useToast()

  const handleFerienwohnungClick = () => {
    toast({
      title: "Ferienwohnung",
      description: "Unsere Ferienwohnung wird in Kürze verfügbar sein. Wir freuen uns auf Ihren Besuch!",
      duration: 5000,
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative min-h-screen w-full flex items-center justify-center">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#f5f1eb] to-[#ede6db]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HintergrundHomepage-idrKBi7EVAbTa9tugQX9DlXZXaEMQS.png)`,
              backgroundSize: "400px",
              backgroundRepeat: "repeat",
              opacity: 0.35,
              filter: "contrast(1.2) brightness(0.9)",
            }}
          ></div>
          {/* Additional overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-beige-200/20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center py-24">
          <div className="bg-white/95 backdrop-blur-md rounded-xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl border border-primary/20">
            {/* Logo instead of text header */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/AuszeitMainLogo.png"
                alt="Auszeit Logo"
                width={280}
                height={140}
                className="h-auto"
                priority
              />
            </div>

            <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie unsere Welt des Genusses – mit unserem vielfältigen Frühstück und Brunch-Angebot aus
              regionalen und Bio-Produkten. Genießen Sie unsere hausgemachten Spezialitäten mit frischen Zutaten, auch
              vegan und vegetarisch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Café Auszeit Section */}
              <div className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-white/95 to-beige-100/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconContainer
                  size="xl"
                  variant="coffee"
                  className="mb-5 transform group-hover:scale-105 transition-transform duration-300"
                >
                  <CustomIcon name="cafe" size={100} />
                </IconContainer>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-aspal-heading">Cafe Auszeit</h2>
                <Link href="/cafe" className="mt-auto w-full" onClick={scrollToTop}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-coffee-600 hover:from-coffee-600 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Zum Café
                  </Button>
                </Link>
              </div>

              {/* Catering Auszeit Section */}
              <div className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-white/95 to-beige-100/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconContainer
                  size="xl"
                  variant="coffee"
                  className="mb-5 transform group-hover:scale-105 transition-transform duration-300"
                >
                  <CustomIcon name="catering" size={100} />
                </IconContainer>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-aspal-heading">Catering Auszeit</h2>
                <Link href="/catering" className="mt-auto w-full" onClick={scrollToTop}>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-coffee-600 hover:from-coffee-600 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Zum Catering
                  </Button>
                </Link>
              </div>

              {/* Ferienwohnung Auszeit Section */}
              <div className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-white/95 to-beige-100/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconContainer
                  size="xl"
                  variant="coffee"
                  className="mb-5 transform group-hover:scale-105 transition-transform duration-300"
                >
                  <CustomIcon name="ferienwohnung" size={100} />
                </IconContainer>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-aspal-heading">Ferienwohnung Auszeit</h2>
                <Button
                  size="lg"
                  className="w-full mt-auto bg-gradient-to-r from-primary to-coffee-600 hover:from-coffee-600 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handleFerienwohnungClick}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      <Toaster />

      {/* Footer */}
      <Footer />
    </main>
  )
}
