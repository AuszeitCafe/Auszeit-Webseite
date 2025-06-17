import { cn } from "@/lib/utils"
import Image from "next/image"
import type { ReactNode } from "react"

interface IconContainerProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "white" | "transparent" | "coffee"
}

export function IconContainer({ children, className, size = "md", variant = "primary" }: IconContainerProps) {
  const sizeClasses = {
    sm: "w-10 h-10 p-2",
    md: "w-14 h-14 p-2.5",
    lg: "w-16 h-16 p-3",
    xl: "w-24 h-24 p-3.5",
  }

  const variantClasses = {
    primary: "bg-primary/15 text-primary",
    white: "bg-white/30 backdrop-blur-sm",
    transparent: "bg-transparent",
    coffee: "bg-coffee-500/15 text-coffee-700",
  }

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

interface CustomIconProps {
  name: "cafe" | "catering" | "service" | "ferienwohnung"
  size?: number
  className?: string
}

export function CustomIcon({ name, size = 24, className }: CustomIconProps) {
  const iconMap = {
    cafe: "/images/CafeAuszeitIcon.png",
    catering: "/images/CateringAuszeitIcon.png",
    service: "/images/ServiceAuszeitIcon.png",
    ferienwohnung: "/images/FerienwohnungLogo.png",
  }

  return (
    <Image
      src={iconMap[name] || "/placeholder.svg"}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  )
}
