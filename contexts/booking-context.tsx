"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type PackageType = "basic" | "standard" | "premium"

interface BookingData {
  guestCount: number
  packageType: PackageType
  duration: number
  addons: {
    premiumDrinks: boolean
    decorationService: boolean
    serviceStaff: boolean
    setupService: boolean
  }
  totalPrice: number
}

interface BookingContextType {
  bookingData: BookingData | null
  setBookingData: (data: BookingData) => void
  clearBookingData: () => void
}

const defaultBookingData: BookingData = {
  guestCount: 25,
  packageType: "standard",
  duration: 4,
  addons: {
    premiumDrinks: false,
    decorationService: false,
    serviceStaff: true,
    setupService: false,
  },
  totalPrice: 0,
}

const BookingContext = createContext<BookingContextType>({
  bookingData: null,
  setBookingData: () => {},
  clearBookingData: () => {},
})

export function useBookingContext() {
  return useContext(BookingContext)
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingDataState] = useState<BookingData | null>(null)

  const setBookingData = (data: BookingData) => {
    setBookingDataState(data)
  }

  const clearBookingData = () => {
    setBookingDataState(null)
  }

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData, clearBookingData }}>
      {children}
    </BookingContext.Provider>
  )
}
