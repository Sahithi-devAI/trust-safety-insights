import React from "react"
import type { ReactNode } from "react"
import { Cinzel_Decorative as CinzelDecorative, Lora, Noto_Serif_SC as NotoSerifSC } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const cinzel = CinzelDecorative({ subsets: ["latin"], weight: ["400", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600"] })
const noto = NotoSerifSC({ subsets: ["latin"], weight: ["300", "400", "500"] })

export const metadata = {
  title: "Trust & Safety Insights — The Tea House",
  description: "Wisdom extracted from the fires of product conversation",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lora.variable} ${noto.variable}`}>
        {children}
      </body>
    </html>
  )
}
