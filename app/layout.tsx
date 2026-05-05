import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Q2 Legacy | Bank Indonesia Magang',
  description: 'Website Kenang-kenangan Program Magang Triwulan 2 Bank Indonesia Sulawesi Selatan',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground min-h-screen relative">
        <SmoothScrollProvider>
          {/* Global Ethnic Motifs */}
          <div className="motif-corner motif-tr opacity-10 fixed top-0 right-0 z-0" />
          <div className="motif-corner motif-bl opacity-10 fixed bottom-0 left-0 z-0" />
          
          <main className="relative z-10">
            {children}
          </main>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
