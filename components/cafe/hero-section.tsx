import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconContainer } from "@/components/ui/icon-container"

export default function CafeHeroSection() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center text-white mt-20">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auszeitbanner2-tx4XgTDDJ6oaYjIsBBiiv0PPf7U3II.png"
        alt="Auszeit Café Interior"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-aspal-title uppercase tracking-wide leading-none">
                Cafe
              </h1>
              <Image
                src="/images/AuszeitMainLogo.png"
                alt="Auszeit Logo"
                width={280}
                height={140}
                className="h-16 md:h-24 lg:h-28 w-auto filter brightness-0 invert -mt-10 md:-mt-14 lg:-mt-16"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                priority
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            Genießen Sie eine Auszeit vom Alltag in unserem gemütlichen Café
          </p>
          <Link href="/">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30">
              <IconContainer size="sm" variant="transparent" className="!w-6 !h-6 !p-0 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </IconContainer>
              Zurück zur Startseite
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
