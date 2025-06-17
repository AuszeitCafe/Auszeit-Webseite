import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GallerySection() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2015.35.46%20%281%29-xeGsMSmbRABj3jSqWxNcKPWGVXeYZZ.jpeg",
      alt: "Elegante Dessert-Präsentation in Einzelportionen",
      title: "Elegante Desserts",
    },
    // {
    //   src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AuszeitFood2-7m7FWIzXAe1Cf5LLCg7GHJvqqYcWVz.jpeg",
    //   alt: "Gelbe und grüne Cocktails in Martini-Gläsern",
    //   title: "Signature Cocktails",
    // }, // Removed
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2015.35.46%20%283%29-d5uEeiY3gmELJR7BOdaC8HzCW2wwDK.jpeg",
      alt: "Mobile Catering-Ausstattung im Fahrzeug",
      title: "Professioneller Aufbau",
    },
    // {
    //   src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-17%20at%2015.35.47-O3AEE8v8OIr5BI1inzgdc0XNiXiQDs.jpeg",
    //   alt: "Komplettes Catering-Setup mit Desserts und Obstplatten",
    //   title: "Komplettes Setup",
    // }, // Removed
  ]

  return (
    <section id="gallery" className="w-full py-16 pb-8 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Impressionen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein kleiner Einblick in unsere Arbeit und unsere kulinarischen Highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {" "}
          {/* Adjusted grid to sm:grid-cols-2 for 2 items */}
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden border-primary/10 shadow-md">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{image.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
