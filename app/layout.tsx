import type { Metadata } from "next"
import { Nunito, DotGothic16, Press_Start_2P } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/sonner"
import { ExitModal } from "@/components/modals/exit-modal"
import { HeartsModal } from "@/components/modals/hearts-modal"
import { PracticeModal } from "@/components/modals/practice-modal"
import "./globals.css"
import "./nes.css"
import { FirstModal } from "@/components/modals/first-modal"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dotgothic16",
})

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-press-start-2p",
})

export const metadata: Metadata = {
  title: "ことばクエスト",
  description: "言語の冒険に出かけましょう！",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider
      afterSignOutUrl="/"
    >
      <html lang="en" className={`${nunito.variable} ${dotGothic16.variable} ${pressStart2P.variable}`}>
        <body className="font-nunito">
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          <FirstModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
