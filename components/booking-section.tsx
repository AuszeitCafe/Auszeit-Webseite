"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
import emailjs from "@emailjs/browser"

export default function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [eventType, setEventType] = useState("private")
  const [guestCountRange, setGuestCountRange] = useState("")
  const [timeOfDay, setTimeOfDay] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    // Basic required checks for fields not handled by native 'required'
    if (!date) {
      setErrorMessage("Bitte wählen Sie ein Datum aus.")
      return
    }
    if (!timeOfDay) {
      setErrorMessage("Bitte wählen Sie eine Uhrzeit aus.")
      return
    }
    if (!guestCountRange) {
      setErrorMessage("Bitte wählen Sie die Anzahl der Gäste aus.")
      return
    }

    try {
      setLoading(true)

      const form = formRef.current
      if (!form) {
        setErrorMessage("Formular nicht gefunden. Bitte laden Sie die Seite neu.")
        return
      }

      const fd = new FormData(form)

      const templateParams = {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        eventType,
        guests: guestCountRange,
        date: format(date, "PPP", { locale: de }),
        timeOfDay,
        message: additionalInfo || String(fd.get("message") || ""),
        // Optional: include bookingData summary if available
        configuration: bookingData
          ? `Paket: ${bookingData.packageType}\nAnzahl Gäste: ${bookingData.guestCount}\nDauer: ${bookingData.duration} Stunden\nGeschätzter Preis: ${bookingData.totalPrice} €`
          : "-",
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

      if (!serviceId || !templateId || !publicKey) {
        setErrorMessage("E-Mail-Konfiguration fehlt. Bitte setzen Sie die ENV-Variablen.")
        return
      }

      await emailjs.send(serviceId, templateId, templateParams, { publicKey })

      setFormSubmitted(true)
      form.reset()
      setDate(undefined)
      setEventType("private")
      setGuestCountRange("")
      setTimeOfDay("")
      setAdditionalInfo("")
      clearBookingData()

      // Hide success state after a short delay
      setTimeout(() => setFormSubmitted(false), 3000)
    } catch (err) {
      console.error(err)
      setErrorMessage("Senden fehlgeschlagen. Bitte versuchen Sie es später erneut.")
    } finally {
      setLoading(false)
    }
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

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" placeholder="Ihr vollständiger Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" name="email" type="email" placeholder="ihre-email@beispiel.de" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input id="phone" name="phone" placeholder="Ihre Telefonnummer" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Anzahl der Gäste *</Label>
                  <Select required value={guestCountRange} onValueChange={setGuestCountRange}>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Wählen Sie" />
                    </SelectTrigger>
                    <SelectContent>
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
                  name="message"
                  placeholder="Teilen Sie uns Ihre Wünsche und Anforderungen mit"
                  className="min-h-[120px]"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>

              {errorMessage && (
                <Alert variant="destructive">
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Wird gesendet…" : formSubmitted ? "Anfrage gesendet!" : "Anfrage absenden"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
