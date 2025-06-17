"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const slideImages = [
  {
    src: "/images/cafe-slideshow/layered-drink-strawberry.jpeg",
    alt: "Geschichtetes Getränk mit Erdbeeren und Matcha",
    title: "Signature Drinks",
    description: "Unsere kreativen Getränke-Kreationen mit frischen Zutaten",
  },
  {
    src: "/images/cafe-slideshow/smoothie-bowl.jpeg",
    alt: "Gesunde Smoothie Bowl mit frischen Früchten",
    title: "Healthy Bowls",
    description: "Nährstoffreiche Bowls für einen gesunden Start in den Tag",
  },
  {
    src: "/images/cafe-slideshow/avocado-toast.jpeg",
    alt: "Gourmet Avocado Toast mit Sprossen",
    title: "Gourmet Toast",
    description: "Kunstvolle Kreationen auf frischem, hausgebackenem Brot",
  },
  {
    src: "/images/cafe-slideshow/pancake-stack.jpeg",
    alt: "Pancake-Turm mit Karamellsauce",
    title: "Sweet Treats",
    description: "Süße Verführungen für besondere Momente des Genusses",
  },
  {
    src: "/images/cafe-slideshow/matcha-whisking.jpeg",
    alt: "Traditionelle Matcha-Zubereitung",
    title: "Matcha Zeremonie",
    description: "Traditionelle japanische Teekultur in perfekter Harmonie",
  },
  {
    src: "/images/cafe-slideshow/bagel-stack.jpeg",
    alt: "Verschiedene Bagel-Sorten gestapelt",
    title: "Frische Bagels",
    description: "Täglich frisch gebackene Bagel-Variationen mit verschiedenen Toppings",
  },
  {
    src: "/images/cafe-slideshow/pink-latte.jpeg",
    alt: "Rosa Latte mit Rosenblüten",
    title: "Specialty Lattes",
    description: "Einzigartige Kaffee-Kreationen mit besonderen Aromen",
  },
  {
    src: "/images/cafe-slideshow/beverage-dispensers.jpeg",
    alt: "Getränkespender mit hausgemachten Limonaden",
    title: "Hausgemachte Limonaden",
    description: "Erfrischende Getränke aus natürlichen, regionalen Zutaten",
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
      <div className="relative aspect-video w-full h-full">
        <Image
          src={slideImages[currentSlide].src || "/placeholder.svg"}
          alt={slideImages[currentSlide].alt}
          fill
          className="object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Enhanced Overlay with better gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content Overlay with smaller, more compact styling */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="backdrop-blur-sm bg-black/30 rounded-lg p-2 inline-block max-w-[80%]">
            <h3 className="text-lg font-bold">{slideImages[currentSlide].title}</h3>
            <p className="text-xs opacity-90">{slideImages[currentSlide].description}</p>
          </div>
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
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium shadow-lg border border-white/20">
        {currentSlide + 1} / {slideImages.length}
      </div>

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
