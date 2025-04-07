import type React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "KAGAZ - Turning Textile Waste into Educational Innovation",
  description:
    "Transforming textile waste into innovative, eco-friendly chart papers and PADs for students, teachers, and professionals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}



import './globals.css'