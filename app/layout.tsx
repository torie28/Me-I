import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const _cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Me & I | Surplus Crops, Reimagined",
  description:
    "Me & I turns surplus agroecological crops into value-added goods: garlic paste, soursop powder, amla powder, and hot & sweet chili sauces. Zero waste, full flavour.",
  keywords: [
    "agroecological",
    "surplus crops",
    "garlic paste",
    "soursop powder",
    "amla powder",
    "chili sauce",
    "food upcycling",
    "Me & I",
  ],
  generator: "v0.app",
  icons: {
    icon: "/logo/me%26i%20logo%20white.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#6BA82E",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_cormorantGaramond.variable} font-serif antialiased`}>
        <ClickSpark
          sparkColor="#6BA82E"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
