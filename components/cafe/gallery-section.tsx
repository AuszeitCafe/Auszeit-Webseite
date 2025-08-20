import Image from "next/image"

const galleryImages = [
  {
    src: "/images/cafe-images/cafe-image1.jpeg",
    alt: "Artisanal coffee with beautiful latte art and matcha layered drink",
  },
  {
    src: "/images/cafe-images/cafe-image2.jpeg",
    alt: "Gourmet cupcake with pistachio garnish at Cafe Auszeit",
  },
  {
    src: "/images/cafe-images/cafe-image3.jpeg",
    alt: "Elegant breakfast plate with eggs benedict and fresh garnishes",
  },
  {
    src: "/images/cafe-images/cafe-image4.jpeg",
    alt: "Refreshing matcha latte with breakfast spread",
  },
  {
    src: "/images/cafe-images/cafe-image5.jpeg",
    alt: "Decadent chocolate dessert with fresh strawberries",
  },
  {
    src: "/images/cafe-images/cafe-image6.jpeg",
    alt: "Sophisticated salad with cured meat and microgreens",
  },
]

export default function GallerySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Einblick in unser Café
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
