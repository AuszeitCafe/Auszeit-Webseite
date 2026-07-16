"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const slideImages = [
  {
    src: "/images/cafe-slideshow/matcha-mango-latte.jpeg",
    alt: "Geschichteter Matcha-Mango-Latte im Glas",
    title: "Signature Drinks",
    description: "Unsere kreativen Getränke-Kreationen mit frischen Zutaten",
  },
  {
    src: "/images/cafe-slideshow/fruehstuecksplatte.jpeg",
    alt: "Reichhaltige Frühstücksplatte mit Brot, Käse, Oliven und frischen Früchten",
    title: "Frühstück & Brunch",
    description: "Reichhaltige Frühstücksplatten – süß und herzhaft angerichtet",
  },
  {
    src: "/images/cafe-slideshow/brioche-hollandaise.jpeg",
    alt: "Brioche mit Ei, Sauce Hollandaise und frischem Salat",
    title: "Herzhafte Küche",
    description: "Frisch zubereitete Gerichte wie unsere Brioche mit Ei und Hollandaise",
  },
  {
    src: "/images/cafe-slideshow/himbeer-cheesecake.jpeg",
    alt: "Cheesecake mit roter Himbeerglasur",
    title: "Hausgemachte Kuchen",
    description: "Cheesecakes und Torten aus unserer eigenen Backstube",
  },
  {
    src: "/images/cafe-slideshow/brunch-catering.jpeg",
    alt: "Große Brunch-Platten mit Käse, Früchten und Spezialitäten",
    title: "Catering & Events",
    description: "Individuelle Buffets für Ihre Feier – liebevoll angerichtet",
  },
  {
    src: "/images/cafe-slideshow/mini-burger.jpeg",
    alt: "Bunte Mini-Burger auf Platten angerichtet",
    title: "Fingerfood",
    description: "Kreative Häppchen und Mini-Burger für jeden Anlass",
  },
  {
    src: "/images/cafe-slideshow/desserts-im-glas.jpeg",
    alt: "Desserts im Glas mit Mango-Panna-Cotta und Pistazientorte",
    title: "Desserts im Glas",
    description: "Feine Dessertkreationen – von Mango-Panna-Cotta bis Lotus",
  },
  {
    src: "/images/cafe-slideshow/obstplatte.jpeg",
    alt: "Bunt angerichtete Obstplatte mit Ananas, Melone und Beeren",
    title: "Frische Obstplatten",
    description: "Bunt angerichtete Früchte, täglich frisch geschnitten",
  },
]

export default function CafeSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 5000) // Increased to 5 seconds for better viewing

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group bg-gradient-to-br from-primary/5 to-coffee-100/20">
      {/* Main Image */}
      {/* Sliding Track */}
      <div className="relative aspect-video w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideImages.map((slide, index) => (
            <div key={index} className="relative min-w-full h-full">
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === currentSlide}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text Overlay */}
              {index === currentSlide && (
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="backdrop-blur-sm bg-black/30 rounded-lg p-2 inline-block max-w-[80%]">
                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-xs opacity-90">{slide.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Enhanced Play/Pause Button */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 shadow-lg"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      {/* Enhanced Slide Indicators - moved up slightly */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/75 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Slide Counter */}
      {/* <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium shadow-lg border border-white/20">
        {currentSlide + 1} / {slideImages.length}
      </div> */}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-primary transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slideImages.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
