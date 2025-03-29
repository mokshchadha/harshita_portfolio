import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Frame, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Harshita - Art Educator & Visual Artist",
  description: "Portfolio website for Harshita, an art educator and visual artist specializing in creative education.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2 mr-4">
                  <Frame className="h-6 w-6" />
                  <span className="font-bold">Harshita</span>
                </Link>
                <nav className="hidden md:flex gap-6 ml-6">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="/portfolio"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/services"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <div className="flex flex-col space-y-4 mt-8">
                        <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
                          Home
                        </Link>
                        <Link
                          href="/about"
                          className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          About
                        </Link>
                        <Link
                          href="/portfolio"
                          className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          Portfolio
                        </Link>
                        <Link
                          href="/services"
                          className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          Services
                        </Link>
                        <Link
                          href="/contact"
                          className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          Contact
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

