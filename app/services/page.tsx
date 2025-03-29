import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services & Workshops</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the various art education services I offer for individuals and organizations.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Private Lessons</CardTitle>
                    <CardDescription>One-on-one personalized instruction</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-2xl font-bold">$60</p>
                    <p className="text-muted-foreground">per hour</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Personalized curriculum</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>All skill levels welcome</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Materials included</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Flexible scheduling</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>In-studio or virtual options</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Book a Lesson</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Group Workshops</CardTitle>
                    <CardDescription>Collaborative learning experiences</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-2xl font-bold">$35</p>
                    <p className="text-muted-foreground">per person (min. 5 people)</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Themed art projects</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>2-3 hour sessions</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>All materials provided</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Great for team building</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Available for private events</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Schedule Workshop</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>School Programs</CardTitle>
                    <CardDescription>Curriculum development and classes</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-2xl font-bold">Custom</p>
                    <p className="text-muted-foreground">pricing based on needs</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Curriculum development</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>After-school programs</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Teacher training</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Integration with core subjects</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Aligned with education standards</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">Request Consultation</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="mx-auto max-w-5xl space-y-8 py-12">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Upcoming Workshops</h2>
                  <p className="text-muted-foreground">
                    Join one of my scheduled workshops open to the public. All materials are provided, and no prior
                    experience is necessary.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Watercolor Landscapes</CardTitle>
                      <CardDescription>Saturday, June 15, 2023 • 1:00-4:00 PM</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Learn the fundamentals of watercolor painting while creating beautiful landscape scenes. Perfect
                        for beginners and intermediate artists looking to refine their techniques.
                      </p>
                      <div className="mt-4 flex justify-between">
                        <span className="font-medium">$45 per person</span>
                        <span className="text-muted-foreground">8 spots left</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button className="w-full">Register Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Mixed Media Collage</CardTitle>
                      <CardDescription>Sunday, June 23, 2023 • 2:00-5:00 PM</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Explore the exciting world of mixed media art. Combine painting, collage, and various materials
                        to create unique, textured artwork that tells your story.
                      </p>
                      <div className="mt-4 flex justify-between">
                        <span className="font-medium">$50 per person</span>
                        <span className="text-muted-foreground">5 spots left</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button className="w-full">Register Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="mx-auto max-w-5xl space-y-4 py-12">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Custom Services</h2>
                  <p className="text-muted-foreground">
                    Don&apos;t see what you&apos;re looking for? I offer custom art education services tailored to your specific
                    needs.
                  </p>
                </div>
                <Link href="/contact">
                  <Button size="lg">Contact Me for Custom Requests</Button>
                </Link>
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

