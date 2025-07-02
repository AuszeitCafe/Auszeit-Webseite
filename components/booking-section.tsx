"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CalendarIcon, Clock, Mail, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { useBookingContext } from "@/contexts/booking-context"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [eventType, setEventType] = useState("private")
  const [guestCountRange, setGuestCountRange] = useState("")
  const [timeOfDay, setTimeOfDay] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")

  // Get booking context
  const { bookingData, clearBookingData } = useBookingContext()

  // Set form values from booking data if available
  useEffect(() => {
    if (bookingData) {
      // Set guest count range based on booking data
      if (bookingData.guestCount <= 25) {
        setGuestCountRange("10-25")
      } else if (bookingData.guestCount <= 50) {
        setGuestCountRange("25-50")
      } else if (bookingData.guestCount <= 100) {
        setGuestCountRange("50-100")
      } else {
        setGuestCountRange("100+")
      }

      // Set additional info with package details
      const packageName =
        bookingData.packageType === "basic" ? "Basic" : bookingData.packageType === "standard" ? "Standard" : "Premium"

      const addons = []
      if (bookingData.addons.premiumDrinks) addons.push("Premium Getränke")
      if (bookingData.addons.decorationService) addons.push("Dekorationsservice")
      if (bookingData.addons.serviceStaff) addons.push("Servicepersonal")
      if (bookingData.addons.setupService) addons.push("Auf- und Abbauservice")

      const addonText = addons.length > 0 ? `\nZusatzoptionen: ${addons.join(", ")}` : ""

      setAdditionalInfo(
        `Paket: ${packageName}\n` +
          `Anzahl Gäste: ${bookingData.guestCount}\n` +
          `Dauer: ${bookingData.duration} Stunden\n` +
          `Geschätzter Preis: ${bookingData.totalPrice} €` +
          addonText,
      )
    }
  }, [bookingData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      clearBookingData()
    }, 3000)
  }

  return (
    <section
      id="booking"
      className="w-full py-16 pt-12 bg-gradient-to-b from-warm-gradient to-accent-gradient relative"
    >
      {/* Add a subtle divider line at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Jetzt Anfragen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Füllen Sie das Formular aus, um eine unverbindliche Anfrage für Ihr Catering zu stellen. Wir melden uns
            schnellstmöglich bei Ihnen.
          </p>
        </div>

        {bookingData && (
          <Alert className="mb-8 bg-primary/10 border-primary/20">
            <AlertDescription className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <span className="font-medium">Ihre Konfiguration wurde übernommen!</span> Bitte vervollständigen Sie das
                Formular.
              </div>
              <div className="mt-2 sm:mt-0 flex gap-2">
                <Badge variant="outline" className="bg-white">
                  {bookingData.guestCount} Gäste
                </Badge>
                <Badge variant="outline" className="bg-white">
                  {bookingData.duration} Stunden
                </Badge>
                <Badge variant="outline" className="bg-white capitalize">
                  {bookingData.packageType} Paket
                </Badge>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Ihr vollständiger Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" type="email" placeholder="ihre-email@beispiel.de" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input id="phone" placeholder="Ihre Telefonnummer" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Anzahl der Gäste *</Label>
                  <Select required value={guestCountRange} onValueChange={setGuestCountRange}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Wählen Sie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-25">10-25 Personen</SelectItem>
                      <SelectItem value="25-50">25-50 Personen</SelectItem>
                      <SelectItem value="50-100">50-100 Personen</SelectItem>
                      <SelectItem value="100+">Über 100 Personen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Art der Veranstaltung *</Label>
                <RadioGroup
                  defaultValue="private"
                  value={eventType}
                  onValueChange={setEventType}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="private" />
                    <Label htmlFor="private">Private Feier</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="corporate" id="corporate" />
                    <Label htmlFor="corporate">Firmenveranstaltung</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wedding" id="wedding" />
                    <Label htmlFor="wedding">Hochzeit</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Sonstiges</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Wunschtermin *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: de }) : <span>Datum auswählen</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={de} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Uhrzeit *</Label>
                  <Select required value={timeOfDay} onValueChange={setTimeOfDay}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Wählen Sie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Vormittag (8-12 Uhr)</SelectItem>
                      <SelectItem value="noon">Mittag (12-15 Uhr)</SelectItem>
                      <SelectItem value="afternoon">Nachmittag (15-18 Uhr)</SelectItem>
                      <SelectItem value="evening">Abend (ab 18 Uhr)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ihre Nachricht</Label>
                <Textarea
                  id="message"
                  placeholder="Teilen Sie uns Ihre Wünsche und Anforderungen mit"
                  className="min-h-[120px]"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {formSubmitted ? "Anfrage gesendet!" : "Anfrage absenden"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
