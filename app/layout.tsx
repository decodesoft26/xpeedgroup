import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xpeedgroup.com"),
  title: {
    default: "Xpeed Group | Energy, Hospitality & Real Estate",
    template: "%s | Xpeed Group",
  },
  description:
    "Xpeed Group is a diversified Malaysian company delivering growth across energy and infrastructure, hospitality, and real estate development.",
  keywords: [
    "Xpeed Group",
    "energy infrastructure Malaysia",
    "hospitality group Malaysia",
    "real estate development",
    "CNG station",
    "hotel",
    "restaurant",
    "property development",
  ],
  openGraph: {
    title: "Xpeed Group",
    description:
      "A diversified group driving growth in energy, hospitality, and real estate across Malaysia.",
    url: "https://www.xpeedgroup.com",
    siteName: "Xpeed Group",
    type: "website",
    images: [
      { url: "/logo.jpeg", width: 1200, height: 630, alt: "Xpeed Group" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpeed Group",
    description:
      "Energy, hospitality and real estate ventures shaped by trust, service, and long-term value.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}