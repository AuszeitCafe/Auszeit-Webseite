"use client"

import { useState, useEffect } from "react"
import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useBookingContext } from "@/contexts/booking-context"

export default function PricingSection() {
  // State for user selections
  const [guestCount, setGuestCount] = useState(25)
  const [packageType, setPackageType] = useState("standard")
  const [duration, setDuration] = useState(4)
  const [addons, setAddons] = useState({
    premiumDrinks: false,
    decorationService: false,
    serviceStaff: true,
    setupService: false,
  })

  // Calculate price based on selections
  const [totalPrice, setTotalPrice] = useState(0)
  const [pricePerPerson, setPricePerPerson] = useState(0)

  // Get booking context
  const { setBookingData } = useBookingContext()

  useEffect(() => {
    // Base price per person based on package
    let basePrice = 0
    switch (packageType) {
      case "basic":
        basePrice = 25
        break
      case "standard":
        basePrice = 35
        break
      case "premium":
        basePrice = 45
        break
    }

    // Apply volume discount for larger groups
    let discountedPrice = basePrice
    if (guestCount > 50) {
      discountedPrice = basePrice * 0.9 // 10% discount for 50+ guests
    } else if (guestCount > 100) {
      discountedPrice = basePrice * 0.85 // 15% discount for 100+ guests
    }

    // Add costs for addons
    let addonCost = 0
    if (addons.premiumDrinks) addonCost += 5
    if (addons.decorationService) addonCost += 3
    if (addons.serviceStaff) addonCost += 4
    if (addons.setupService) addonCost += 2

    // Calculate duration impact (base is 4 hours)
    const durationFactor = duration / 4

    // Calculate final price per person
    const finalPricePerPerson = (discountedPrice + addonCost) * durationFactor

    // Calculate total price
    const calculatedTotal = finalPricePerPerson * guestCount

    setPricePerPerson(Math.round(finalPricePerPerson))
    setTotalPrice(Math.round(calculatedTotal))
  }, [guestCount, packageType, duration, addons])

  const handleBookingRequest = () => {
    // Save the current configuration to context
    setBookingData({
      guestCount,
      packageType: packageType as "basic" | "standard" | "premium",
      duration,
      addons,
      totalPrice,
    })

    // Scroll to booking section
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preiskalkulator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Konfigurieren Sie Ihr individuelles Catering-Paket und erhalten Sie sofort einen Preisüberblick.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 font-aspal-heading">Ihre Konfiguration</h3>

                <div className="space-y-8">
                  {/* Guest Count Slider */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="guest-count" className="text-base font-medium">
                        Anzahl der Gäste
                      </Label>
                      <span className="font-medium text-lg">{guestCount}</span>
                    </div>
                    <Slider
                      id="guest-count"
                      min={10}
                      max={200}
                      step={5}
                      value={[guestCount]}
                      onValueChange={(value) => setGuestCount(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>10</span>
                      <span>50</span>
                      <span>100</span>
                      <span>150</span>
                      <span>200</span>
                    </div>
                  </div>

                  {/* Package Selection */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Catering-Paket</Label>
                    <Tabs defaultValue="standard" value={packageType} onValueChange={setPackageType} className="w-full">
                      <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="basic">Basic</TabsTrigger>
                        <TabsTrigger value="standard">Standard</TabsTrigger>
                        <TabsTrigger value="premium">Premium</TabsTrigger>
                      </TabsList>
                      <TabsContent value="basic" className="mt-4 space-y-2">
                        <h4 className="font-medium">Basic Paket beinhaltet:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Fingerfood-Auswahl (5 Sorten)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Dessert-Variation (3 Sorten)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Softgetränke inklusive</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Basis-Geschirr und Besteck</span>
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="standard" className="mt-4 space-y-2">
                        <h4 className="font-medium">Standard Paket beinhaltet:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Fingerfood-Auswahl (8 Sorten)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Dessert-Variation (5 Sorten)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Softgetränke & Saftauswahl</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Hochwertiges Geschirr und Besteck</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>1 Servicekraft je 25 Gäste</span>
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="premium" className="mt-4 space-y-2">
                        <h4 className="font-medium">Premium Paket beinhaltet:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Fingerfood-Auswahl (12 Sorten)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Dessert-Variation (8 Sorten)</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Komplettes Getränkeangebot inkl. Wein</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Premium Geschirr und Besteck</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Servicepersonal nach Bedarf</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>Tischdekoration inklusive</span>
                          </li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Duration Selection */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="duration" className="text-base font-medium">
                        Veranstaltungsdauer (Stunden)
                      </Label>
                      <span className="font-medium text-lg">{duration} Stunden</span>
                    </div>
                    <RadioGroup
                      id="duration"
                      value={duration.toString()}
                      onValueChange={(value) => setDuration(Number.parseInt(value))}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="2" id="duration-2" />
                        <Label htmlFor="duration-2">2 Stunden</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4" id="duration-4" />
                        <Label htmlFor="duration-4">4 Stunden</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6" id="duration-6" />
                        <Label htmlFor="duration-6">6 Stunden</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="8" id="duration-8" />
                        <Label htmlFor="duration-8">8 Stunden</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Zusätzliche Optionen</Label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="premium-drinks" className="cursor-pointer">
                            Premium Getränkeauswahl
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-sm">
                                  Erweiterte Auswahl an Weinen, Cocktails und Spirituosen
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Switch
                          id="premium-drinks"
                          checked={addons.premiumDrinks}
                          onCheckedChange={(checked) => setAddons({ ...addons, premiumDrinks: checked })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="decoration" className="cursor-pointer">
                            Dekorationsservice
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-sm">
                                  Individuelle Tisch- und Raumdekoration nach Ihren Wünschen
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Switch
                          id="decoration"
                          checked={addons.decorationService}
                          onCheckedChange={(checked) => setAddons({ ...addons, decorationService: checked })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="service-staff" className="cursor-pointer">
                            Servicepersonal
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-sm">
                                  Professionelles Servicepersonal für Ihre Veranstaltung
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Switch
                          id="service-staff"
                          checked={addons.serviceStaff}
                          onCheckedChange={(checked) => setAddons({ ...addons, serviceStaff: checked })}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="setup" className="cursor-pointer">
                            Auf- und Abbauservice
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-sm">Kompletter Auf- und Abbau der Catering-Ausstattung</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Switch
                          id="setup"
                          checked={addons.setupService}
                          onCheckedChange={(checked) => setAddons({ ...addons, setupService: checked })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 font-aspal-heading">Ihre Preisübersicht</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Paket</span>
                    <span className="font-medium capitalize">
                      {packageType === "basic" ? "Basic" : packageType === "standard" ? "Standard" : "Premium"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Anzahl Gäste</span>
                    <span className="font-medium">{guestCount} Personen</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Dauer</span>
                    <span className="font-medium">{duration} Stunden</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Zusatzoptionen</span>
                    <span className="font-medium">{Object.values(addons).filter(Boolean).length}</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-muted-foreground">Preis pro Person</span>
                    <span className="font-medium">{pricePerPerson} €</span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold">Gesamtpreis</span>
                    <span className="text-2xl font-bold text-primary">{totalPrice} €</span>
                  </div>

                  <p className="text-xs text-muted-foreground mt-2">
                    Alle Preise verstehen sich inkl. MwSt. Dies ist ein unverbindlicher Kostenvoranschlag. Für ein
                    detailliertes Angebot kontaktieren Sie uns bitte.
                  </p>

                  <Button className="w-full mt-4" size="lg" onClick={handleBookingRequest}>
                    Jetzt anfragen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
