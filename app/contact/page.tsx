import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/">
                <Button variant="ghost" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch for inquiries about lessons, workshops, or collaborations.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Subject of your message" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="flex flex-col space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="text-muted-foreground">
                      Feel free to reach out through any of these channels. I typically respond within 24-48 hours.
                    </p>
                  </div>

                  <div className="grid gap-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">harshita@example.com</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Best for detailed inquiries and booking information
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">Available Monday-Friday, 9am-5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-bold">Studio Location</h3>
                        <p className="text-muted-foreground">123 Art Street, Creative City</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Open for scheduled appointments and classes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-bold mb-2">Follow Me</h3>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        Instagram
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        Pinterest
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        LinkedIn
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
                        YouTube
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Pinterest
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                YouTube
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Harshita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

